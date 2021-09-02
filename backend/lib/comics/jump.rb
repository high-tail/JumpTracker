require 'open-uri'
require 'nokogiri'

module Comics
  # crowling jump data
  class Jump
    def self.batch
      jump_url = 'https://www.shonenjump.com/j/rensai/'
      agent = Mechanize.new
      page = agent.get(jump_url)
      elements = page.search(".//section[@class='serialSeries']")
      elements.css('ul li').each do |node|
        title = node.css('div').text[/『(.*?)』/, 1]
        url = "https://www.shonenjump.com#{node.css('a')[0][:href]}"
        comic = Comic.new(
          title: title,
          url: url,
          magazine_id: 1
        )
        comic.save!
      end
    end
  end
end
