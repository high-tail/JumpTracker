require 'open-uri'
require 'nokogiri'

module Comics
  # crowling jump data
  class UpdateReleaseDate
    def self.batch
      jump_url = 'https://www.shonenjump.com/j/comics/next.html'
      jump_sq_url = 'https://jumpsq.shueisha.co.jp/comics/'

      # 将来的にはすべてs-mangaから取得する？
      young_jump_url = 'https://www.s-manga.net/newcomics/index.html'
      young_jump_url_next = "#{young_jump_url}?month=next"
      young_jump_url_after_next = "#{young_jump_url}?month=afternext"
      agent = Mechanize.new

      jump_page = agent.get(jump_url)
      jump_sq_page = agent.get(jump_sq_url)
      young_jump_page = agent.get(young_jump_url)
      young_jump_page_next = agent.get(young_jump_url_next)
      young_jump_page_after_next = agent.get(young_jump_url_after_next)

      # update
      update_jump(jump_page)
      update_jump_sq(jump_sq_page)
      update_young_jump(
        young_jump_page,
        young_jump_page_next,
        young_jump_page_after_next
      )
    end

    def self.update_jump(page)
      next_month(page)
      after_next_month(page)
    end

    def self.update_jump_sq(page)
      next_month_sq(page)
    end

    def self.update_young_jump(page, next_page, after_next_page)
      month_young(page)
      month_young(next_page)
      month_young(after_next_page)
    end

    def self.next_month(page)
      page.search('.//table[@class="p_table"]')[0].css('tr').each do |p|
        next unless p.css('td')[0]

        title = p.css('td')[0].text.match(/\S+/)[0].split('【')[0]
        next_release_date1 = page.search('h2')[0].text.match(
          %r/([0-9]{4})(\/|-|年)([0-9]{1,2})(\/|-|月)([0-9]{1,2})(\/|-|日)/
        )

        comic = Comic.find_by(title: title)
        if comic.present?
          comic.next_release_date = convert_date(next_release_date1)
          comic.save!
        end
      end
    end

    def self.next_month_sq(page)
      next_release_date = page.search('div .info')[1].text.match(%r/([0-9]{1,2})(\/|-|月)([0-9]{1,2})(\/|-|日)/)
      page.search('.//ul[@class="sqList next"]').css('div').each do |p|
        next unless p

        title = p.text.match(/\S+/)[0].split('【')[0]
        comic = Comic.find_by(title: title)
        if comic.present?
          comic.next_release_date = convert_date_with_month_date(next_release_date)
          comic.save!
        end
      end
    end

    def self.month_young(page)
      page_hash = JSON.parse(page.search('script')[5].text.split("=")[1].split(";")[0])
      return if page_hash['data'].blank?

      page_hash['data']['paper_data']['item_datas'].each do |p|
        next unless p['label_name'] == 'ヤングジャンプコミックス'

        title = p['item_name'].split(/\s\d/)[0]
        next_release_date = p['release_date']
        comic = Comic.find_by(title: title)
        if comic.present?
          comic.next_release_date = Date.parse(next_release_date)
          comic.save!
        end
      end
    end

    def self.after_next_month(page)
      page.search('.//table[@class="p_table"]')[1].css('tr').each do |p|
        next unless p.css('td')[0]

        title = p.css('td')[0].text.match(/\S+/)[0].split('【')[0]
        next_release_date2 = page.search('h2')[1].text.match(
          %r/([0-9]{4})(\/|-|年)([0-9]{1,2})(\/|-|月)([0-9]{1,2})(\/|-|日)/
        )
        comic = Comic.find_by(title: title)

        if comic.present?
          comic.next_release_date = convert_date(next_release_date2)
          comic.save!
        end
      end
    end

    def self.convert_date(next_release_date)
      Date.new(
        next_release_date[1].to_i,
        next_release_date[3].to_i,
        next_release_date[5].to_i
      )
    end

    def self.convert_date_with_month_date(next_release_date)
      Date.new(
        Date.today.year,
        next_release_date[1].to_i,
        next_release_date[3].to_i
      )
    end
  end
end
