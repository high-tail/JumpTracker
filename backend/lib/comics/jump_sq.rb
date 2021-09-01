require 'open-uri'
require 'nokogiri'

module Comics
  # crowling jump data
  class JumpSq
    def self.batch
      jump_url = 'https://jumpsq.shueisha.co.jp/rensai/'
      agent = Mechanize.new
      page = agent.get(jump_url)
      elements = page.search(".//ul[@class='rensaiList']")
      elements.css('a').each do |node|
        title = node.css('li').text
        url = "https://jumpsq.shueisha.co.jp#{node[:href]}"
        comic = Comic.new(
          title: title,
          url: url,
          magazine_id: 2
        )
        comic.save!
      end
    end
  end
end
