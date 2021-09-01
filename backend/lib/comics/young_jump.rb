require 'open-uri'
require 'nokogiri'

module Comics
  # crowling jump data
  class YoungJump
    def self.batch
      jump_url = 'https://youngjump.jp/manga/'
      agent = Mechanize.new
      page = agent.get(jump_url)
      elements = page.search(".//ul[@id='serial']")
      elements.css('li').each do |node|
        title = node.css('a').search(".//div[@class='works']").css('h1')[0].text
        url = "https://youngjump.jp#{node.css('a')[0][:href]}"
        comic = Comic.new(
          title: title,
          url: url,
          magazine_id: 3
        )
        comic.save!
      end
    end
  end
end
