import React, { useState } from "react";

export default function GoodReadsRss() {
  const [rssUrl, setRssUrl] = useState('https://www.goodreads.com/user/updates_rss/108357320');
  const [items, setItems] = useState([]);

  const filterJunk = (unFormatted) => {
    let frontTrimmed = unFormatted.replace(/<!\[CDATA\[/g, '')
    let fullTrim = frontTrimmed.replace(/\]\]>/, '')
    return(fullTrim)
  }

  const getRss = async (e) => {
    e.preventDefault();
    const urlRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    if (!urlRegex.test(rssUrl)) {
      return;
    }
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
  };  
    
  return (
    <div>
      <form onSubmit={getRss}>
        <div>
          <label> rss url</label>
          <br />
          <input onBeforeInput={(e) => setRssUrl(e.target.value)} value={rssUrl} />
        </div>
        <input type="submit" />
      </form>
      {items.map((item) => {
        return (
          <div className="goodReadUpdates">
            <p>{item.title}</p>
            <p className="extraSmallLetters">{item.pubDate}</p>
            <div
              dangerouslySetInnerHTML={{__html: item.description}}
            />
          </div>
        );
      })}
    </div>
  );
}



