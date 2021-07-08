function proxyXml(target) {
  return new Proxy(new String(target), {
    get(target, property) {
      if (property !== "sitemaps") {
        if (property in Reflect.ownKeys(target) && typeof target[property] == "function") return target.indexOf.bind(target);
        return Reflect.get(target, property);
      }
      const res =target.matchAll(/<loc>(?<loc>.+)<\/loc>/g);
      const list = [...res].map(item => item.groups.loc);
      return list;
    }
  });
}

const temp = `<?xml version="1.0" encoding="UTF-8"?>
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
          <loc>https://test-novel.novelpdfdownload.com/test1.txt</loc>
        </sitemap>
        <sitemap>
          <loc>https://test-novel.novelpdfdownload.com/test2.txt</loc>
        </sitemap>
      </sitemapindex>`;

const xml = proxyXml(temp);
console.log(xml.sitemaps);
// console.log(xml.indexOf("xml"))

// const res = temp.matchAll(/<loc>(?<loc>.+)<\/loc>/g);
// console.log("==res", [...res].map(item => item.groups.loc));

