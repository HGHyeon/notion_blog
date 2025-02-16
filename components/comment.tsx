// To enable comments:
// 1. Uncomment this component
// 2. Update repo, repoId, and categoryId with your own giscus settings
// 3. Visit https://giscus.app to get your settings

import Giscus from "@giscus/react";

export default function Comment() {
  return (
    <Giscus
      id="comments"
      repo="HGHyeon/notion_blog"
      repoId="R_kgDON6S-zA"
      category="Announcements"
      categoryId="DIC_kwDON6S-zM4CnAvk"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="ko"
      loading="lazy"
    />
  );
}

