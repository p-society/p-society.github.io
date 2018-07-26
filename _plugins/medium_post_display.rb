require 'feedjira'
module Jekyll
  # Get RSS feed to the site
  class MediumPostDisplay < Generator
    safe true
    priority :high
    def generate(site)
      jekyll_coll = Jekyll::Collection.new(site, 'external_feed')
      site.collections['external_feed'] = jekyll_coll
      display(jekyll_coll, site)
    end

    def display(jekyll_coll, site)
      Feedjira::Feed.fetch_and_parse('https://medium.com/feed/programming-society-gazette/')
                    .entries.each do |e|
        path = site.in_source_dir('./_external_feed/' + e[:title] + '.md')
        doc = Jekyll::Document.new(path, site: site, collection: jekyll_coll)
        doc.data['title'] = e[:title]
        doc.data['feed_content'] = e[:content]
        jekyll_coll.docs << doc
      end
    end
  end
end
