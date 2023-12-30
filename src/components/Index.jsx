import React, { useEffect, useState } from "react";

function Index() {
  let [htmlFileString, setHtmlFileString] = useState();

  async function fetchHtml() {
    setHtmlFileString(await (await fetch(`/static/index.html`)).text());
  }
  useEffect(() => {
    fetchHtml();
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
    </div>
  );
}

export default Index;
