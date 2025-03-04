import React, { useState, useEffect } from "react";

export default function GoodReadsRss() {
  const [rssUrl, setRssUrl] = useState('https://www.goodreads.com/user/updates_rss/108357320');
  const [items, setItems] = useState([]);

  const filterJunk = (unFormatted) => {
    return unFormatted.replace(/<!\[CDATA\[/g, '').replace(/\]\]>/, '');
  };

  const getRss = async () => {
    const urlRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    if (!urlRegex.test(rssUrl)) {
      return;
    }
    try {
      const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
      const { contents } = await res.json();
      const feed = new window.DOMParser().parseFromString(contents, "text/xml");
      const items = feed.querySelectorAll("item");
      const feedItems = [...items].map((el) => ({
        description: filterJunk(el.querySelector("description").innerHTML),
        title: filterJunk(el.querySelector("title").innerHTML),
        pubDate: filterJunk(el.querySelector("pubDate").innerHTML),
      }));
      setItems(feedItems);
    } catch (error) {
      console.error("Error fetching RSS feed:", error);
    }
  };

  useEffect(() => {
    getRss();
  }, [rssUrl]);

  return (
    <div> 
      {items.map((item, index) => (
        <div key={index} className="posts">
          <a>{item.title}</a>
          <p className="extraSmallLetters">{item.pubDate}</p>
          <div dangerouslySetInnerHTML={{ __html: item.description }} />
        </div>
      ))}
    </div>
  );
}
