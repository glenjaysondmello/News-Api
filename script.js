fetch(
  "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F"
)
  .then((response) => response.json())
  .then((data) => {
    const newList = document.getElementById("news-list");
    data.items.forEach((item) => {
      const li = document.createElement("li");
      const h2 = document.createElement("h2");
      const a = document.createElement("a");
      const h1 = document.createElement("h1");
      const p = document.createElement("p");

      console.log(data);

      const descriptionText = item.description.replace(/<\/?p>/g, "");

      h1.textContent = item.title;
      h2.textContent = item.author;
      a.textContent = "Read More...";
      a.href = item.link;
      a.target = "__blank";
      p.textContent = item.categories;

      li.appendChild(h1);
      li.appendChild(p);
      li.appendChild(h2);
      li.appendChild(document.createTextNode(descriptionText));
      li.appendChild(a);
      newList.appendChild(li);
    });
  });
