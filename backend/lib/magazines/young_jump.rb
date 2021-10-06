require 'open-uri'
require 'nokogiri'
require 'date'

module Magazines
  # crowling jump data
  class YoungJump
    def self.batch
      jump_url = 'https://youngjump.jp/magazine/'
      agent = Mechanize.new
      page = agent.get(jump_url)
      elements = page.search(".//div[@class='detail']")
                     .search(".//p[@class='date']")
      next_release_date = ""
      elements.css('p').each do |p|
        next_release_date = p.text.match(
          %r/([0-9]{4})(\/|-|年)([0-9]{1,2})(\/|-|月)([0-9]{1,2})(\/|-|日)/
        )
      end
      res_date = Date.new(
        next_release_date[1].to_i,
        next_release_date[3].to_i,
        next_release_date[5].to_i
      )

      jump = Magazine.find_by(title: '週刊ヤングジャンプ')
      jump.next_release_date = res_date
      jump.save!
    end
  end
end
