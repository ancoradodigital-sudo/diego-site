const englishTranslations = new Map([
  ['川西工業 ホーム', 'Kawanishi Industry home'],
  ['メインナビゲーション', 'Main navigation'],
  ['言語選択', 'Language selection'],
  ['川西工業', 'Kawanishi Industry'],
  ['日本語', 'Japanese'], ['英語', 'English'],
  ['私たちの強み', 'Our strengths'], ['対応分野', 'Industries'], ['安全と品質', 'Safety & quality'], ['会社情報', 'Company'],
  ['お問い合わせ', 'Contact'], ['メニューを開く', 'Open menu'],
  ['溶接のプロフェッショナル／川西工業', 'WELDING PROFESSIONALS / KAWANISHI'],
  ['現場を支える、', 'Welding expertise'], ['確かな溶接技術。', 'that powers your site.'],
  ['橋梁、造船、大型構造物。', 'Bridges, shipbuilding and large-scale structures.'],
  ['熟練の技術者が現場へ赴き、品質と工程を守り抜く。', 'Skilled professionals join your site to protect quality and keep schedules moving.'],
  ['ご相談・お問い合わせ', 'Discuss your project'], ['川西工業について', 'About Kawanishi'],
  ['全国', 'Nationwide'], ['の現場に対応', 'site coverage'], ['有資格者', 'Certified talent'], ['を適正配置', 'matched to every job'], ['短期・長期', 'Short or long term'], ['ともに相談可能', 'engagements available'],
  ['現場溶接ソリューション', 'ON-SITE WELDING SOLUTIONS'], ['現場で築く信頼', 'TRUSTED ON SITE'],
  ['橋梁工事', 'Bridge construction'], ['造船・海洋', 'Shipbuilding & marine'], ['プラント', 'Industrial plants'], ['大型鉄骨', 'Heavy steelwork'], ['補修・改修', 'Repair & renewal'],
  ['課題', 'ISSUE'], ['現場のお悩み', 'YOUR CHALLENGE'],
  ['こんな現場の課題、', 'Are these challenges'], ['抱えていませんか。', 'holding your site back?'],
  ['工程を止めないために必要なのは、単なる「人数」ではありません。現場を理解し、自ら動ける技術者です。', 'Keeping a project moving takes more than headcount. It takes skilled people who understand the site and act with purpose.'],
  ['急な増員が必要', 'Urgent workforce demand'], ['工程変更や繁忙期により、経験ある溶接技術者をすぐに確保したい。', 'You need experienced welders quickly after a schedule change or during a peak workload.'],
  ['特殊な技術が必要', 'Specialized skills required'], ['施工条件に合う資格や、大型構造物での現場経験を持つ人材が足りない。', 'Your site lacks certified people with the right experience in large-scale structures.'],
  ['品質を安定させたい', 'Consistent quality matters'], ['安全・品質の基準を理解し、周囲と連携できるチームに任せたい。', 'You need a team that understands safety, meets quality standards and works well with others.'],
  ['川西工業の答え', 'KAWANISHI’S ANSWER'], ['必要な現場に、必要な技術を。', 'The right skills, exactly where they are needed.'], ['私たちの対応力を見る ↓', 'See how we deliver ↓'],
  ['私たちについて', 'ABOUT US'], ['技術者が動けば、', 'When skilled people move,'], ['プロジェクトが前へ進む。', 'projects move forward.'],
  ['川西工業は、溶接技術を必要とする建設・製造現場へ、経験豊富な技術者チームを送り出すプロフェッショナル集団です。', 'Kawanishi Industry deploys experienced welding teams to construction and manufacturing sites where proven expertise is essential.'],
  ['現場ごとに異なる条件や工程を正確に理解し、お客様のチームの一員として、安全・品質・納期に責任を持って施工します。', 'We understand the conditions and schedule of every project, working as part of your team with full responsibility for safety, quality and delivery.'],
  ['※掲載内容・数値は現在仮のものです。', 'Note: Current information and figures are placeholders.'],
  ['年以上', '+ years'], ['溶接現場での経験', 'On-site welding experience'], ['件+', '+ projects'], ['年間対応プロジェクト', 'Projects supported annually'], ['工期内完了率', 'On-time completion rate'],
  ['重要な考え', 'OUR APPROACH'], ['人材を送るだけではなく、', 'We do more than supply people. We build '], ['現場に機能するチーム', 'teams that perform on site'], ['をつくる。それが川西工業の考える技術支援です。', '. That is Kawanishi’s approach to technical support.'],
  ['あらゆる現場に、', 'The right capability'], ['最適な技術力を。', 'for every site.'], ['構造物の規模や環境を問わず、必要な人数・技術・期間に合わせて柔軟なチームを編成します。', 'Whatever the scale or environment, we assemble flexible teams around the people, skills and duration your project requires.'],
  ['現場での対応力', 'On-site capability'], ['造船・海洋構造物', 'Shipbuilding & marine structures'], ['大規模な現場にも、', 'A ready-to-perform team'], ['即戦力となるチームを。', 'for the largest sites.'], ['確かな施工品質', 'PROVEN WORKMANSHIP'], ['一つひとつの溶接に、責任を。', 'Accountability in every weld.'], ['施工現場／01', 'ON SITE / 01'],
  ['橋', 'BR'], ['橋梁建設', 'BRIDGE CONSTRUCTION'], ['橋梁・インフラ', 'Bridges & infrastructure'], ['新設・補修工事における鋼構造物の溶接施工', 'Steel structure welding for new construction and repair projects'],
  ['船', 'SH'], ['造船', 'SHIPBUILDING'], ['造船・海洋構造物', 'Shipbuilding & marine structures'], ['船体ブロックから艤装品まで幅広い溶接に対応', 'Welding from hull blocks to outfitting components'],
  ['工', 'PL'], ['プラント・鉄骨', 'PLANTS & STEELWORK'], ['工場設備・大型鉄骨・各種配管の現地施工', 'On-site work for industrial equipment, heavy steel and piping'],
  ['私たちの基準', 'OUR STANDARD'], ['安全。', 'SAFETY.'], ['品質。', 'QUALITY.'], ['信頼。', 'TRUST.'], ['技術だけでは、', 'Expertise alone'], ['信頼はつくれない。', 'does not build trust.'],
  ['安全を、すべての判断基準に。', 'Safety guides every decision.'], ['現場ルールの遵守と日々の危険予知活動を徹底。技術者一人ひとりが安全への高い意識を持ちます。', 'We follow every site rule and conduct daily hazard awareness activities. Every professional owns safety.'],
  ['施工前の確認と連携を徹底', 'Thorough alignment before work begins'],
  ['資格と経験に裏付けられた品質。', 'Quality backed by certification and experience.'], ['必要な資格・技量を持つ人材を適切に配置し、施工条件に合わせた確実な溶接を行います。', 'We assign properly qualified people and deliver reliable welding for the exact conditions of the job.'],
  ['チームとして、現場に応える。', 'A team built to deliver on site.'], ['挨拶、報告、連絡、相談を大切にし、お客様や協力会社との連携を円滑にします。', 'Clear communication and professional conduct keep coordination smooth with clients and partner companies.'],
  ['ご依頼の流れ', 'WORK FLOW'], ['ご相談から、現場参画まで。', 'From first contact to joining your site.'],
  ['ヒアリング', 'DISCOVERY'], ['人員編成', 'TEAM BUILDING'], ['現場対応', 'ON SITE'],
  ['工事内容・場所・期間・必要人数などをお聞かせください。', 'Tell us the scope, location, duration and workforce your project requires.'], ['要件確認', 'Requirements review'], ['必要資格や施工条件、現場ルールを細かく確認します。', 'We confirm qualifications, working conditions and all site requirements.'], ['チーム編成', 'Team formation'], ['条件に適した技術者を選定し、体制と工程をご提案します。', 'We select the right professionals and propose the team structure and schedule.'], ['現場参画', 'Site deployment'], ['安全教育を経て現場へ。責任を持って施工を進めます。', 'After safety onboarding, our team joins the site and delivers with accountability.'],
  ['人と技術で、', 'Supporting Japanese industry'], ['日本のものづくりを支える。', 'through people and expertise.'],
  ['会社名', 'Company'], ['川西工業株式会社', 'Kawanishi Industry Co., Ltd.'], ['（仮）', '(placeholder)'], ['代表者', 'Representative'], ['代表取締役　川西 太郎', 'President: Taro Kawanishi'], ['所在地', 'Address'], ['〒000-0000　○○県○○市○○町0-0', '0-0 Sample, Sample City, Japan 000-0000'], ['事業内容', 'Services'], ['橋梁・造船・プラント等における溶接施工、技術支援', 'On-site welding and technical support for bridges, shipbuilding and industrial plants'], ['対応エリア', 'Service area'], ['日本全国', 'Nationwide Japan'],
  ['現場の人材・溶接施工について、', 'Need welding professionals'], ['まずはご相談ください。', 'for your next project?'], ['工事の規模や期間が未確定でも構いません。', 'Your scope and schedule do not need to be final.'], ['担当者が内容を伺い、最適な体制をご提案します。', 'Tell us what you know, and we will recommend the right team.'], ['お問い合わせフォーム', 'Contact our team'], ['受付時間　平日 9:00–17:00（仮）', 'Hours: Weekdays 9:00–17:00 (placeholder)'],
  ['現場の相談をする', 'Discuss your project'], ['確かな技術で、現場の未来をつなぐ。', 'Proven expertise for the future of every site.'], ['トップ', 'TOP'], ['© 2026 川西工業株式会社', '© 2026 KAWANISHI INDUSTRY. ALL RIGHTS RESERVED.']
]);

const japaneseSnapshot = new WeakMap();

const translateTextNodes = (language) => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (!japaneseSnapshot.has(node)) japaneseSnapshot.set(node, node.nodeValue);
    const original = japaneseSnapshot.get(node);
    if (language === 'ja') {
      node.nodeValue = original;
      return;
    }
    const trimmed = original.trim();
    if (!trimmed) return;
    const translation = englishTranslations.get(trimmed);
    if (translation) node.nodeValue = original.replace(trimmed, translation);
  });
};

const applyLanguage = (language) => {
  const selectedLanguage = language === 'en' ? 'en' : 'ja';
  document.documentElement.lang = selectedLanguage;
  translateTextNodes(selectedLanguage);
  document.title = selectedLanguage === 'ja'
    ? '川西工業株式会社｜現場を支える、確かな溶接技術'
    : 'Kawanishi Industry | On-site Welding Professionals';
  document.querySelector('meta[name="description"]').content = selectedLanguage === 'ja'
    ? '川西工業は、橋梁・造船・大型構造物の現場へ熟練の溶接技術者を派遣し、確かな技術でプロジェクトを支えます。'
    : 'Kawanishi deploys skilled welding professionals to bridge, shipbuilding and large-scale industrial projects across Japan.';
  document.querySelectorAll('[aria-label]').forEach((element) => {
    if (!element.dataset.jaLabel) element.dataset.jaLabel = element.getAttribute('aria-label');
    element.setAttribute('aria-label', selectedLanguage === 'en' ? englishTranslations.get(element.dataset.jaLabel) || element.dataset.jaLabel : element.dataset.jaLabel);
  });
  document.querySelectorAll('.localized-logo').forEach((logo) => {
    logo.src = selectedLanguage === 'ja' ? 'assets/Logo/logo com nome.png' : 'assets/Logo/logo.png';
    logo.alt = selectedLanguage === 'ja' ? '川西工業' : 'Kawanishi Industry';
  });
  document.querySelectorAll('.english-brand').forEach((brand) => { brand.hidden = selectedLanguage !== 'en'; });
  document.querySelectorAll('[data-language]').forEach((button) => button.classList.toggle('active', button.dataset.language === selectedLanguage));
  localStorage.setItem('kawanishi-language', selectedLanguage);
};

document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.language)));
applyLanguage(localStorage.getItem('kawanishi-language') || 'ja');
