require 'open-uri'
require 'nokogiri'
require 'date'

module Magazines
  # crowling jump data
  class Jump
    def self.batch
      jump_url = 'https://www.shonenjump.com/j/weeklyshonenjump/'
      agent = Mechanize.new
      page = agent.get(jump_url)
      elements = page.search(".//a[@id='nextWJ']")
      next_release_date = ""
      elements.css('p').each do |p|
        next_release_date = p.text.match(
          %r/([0-9]{1,2})(\/|-|月)([0-9]{1,2})(\/|-|日)/
        )
      end

      year = Date.today.year
      month = next_release_date[1].to_i
      date = next_release_date[3].to_i
      res_date = Date.new(year, month, date)

      jump = Magazine.find_by(id: 1)
      jump.next_release_date = res_date
      jump.save!
    end
  end
end
