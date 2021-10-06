require 'open-uri'
require 'nokogiri'
require 'date'

module Magazines
  # crowling jump data
  class JumpSq
    def self.batch
      jump_url = 'https://jumpsq.shueisha.co.jp/sq/yokoku.html'
      agent = Mechanize.new
      page = agent.get(jump_url)
      elements = page.search(".//div[@class='info']")
      next_release_date = elements.text.match(%r/([0-9]{1,2})(\/|-|月)([0-9]{1,2})(\/|-|日)/)

      year = Date.today.year
      month = next_release_date[1].to_i
      date = next_release_date[3].to_i
      res_date = Date.new(year, month, date)

      jump = Magazine.find_by(title: 'ジャンプSQ')
      jump.next_release_date = res_date
      jump.save!
    end
  end
end
