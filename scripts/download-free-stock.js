const fs = require("fs");
const path = require("path");

const outputDir = path.join("assets", "free-stock", "japan-curated");
const manifestPath = path.join(outputDir, "manifest.json");
const readmePath = path.join(outputDir, "README.md");

const entries = [
  {
    category: "builder",
    slug: "japan-house-exterior-01",
    title: "Japanese traditional style house design / 和風建築",
    creator: "TANAKA Juuyoh (田中十洋)",
    license: "CC BY 2.0",
    license_url: "https://creativecommons.org/licenses/by/2.0/",
    source: "Flickr via Openverse",
    source_page: "https://www.flickr.com/photos/13910409@N05/5878459946",
    image_url: "https://live.staticflickr.com/5269/5878459946_4006fd5b2a_b.jpg",
  },
  {
    category: "builder",
    slug: "japan-house-exterior-02",
    title: "Japanese traditional style house design / 和風建築",
    creator: "TANAKA Juuyoh (田中十洋)",
    license: "CC BY 2.0",
    license_url: "https://creativecommons.org/licenses/by/2.0/",
    source: "Flickr via Openverse",
    source_page: "https://www.flickr.com/photos/13910409@N05/7486011614",
    image_url: "https://live.staticflickr.com/7118/7486011614_067f27c511_b.jpg",
  },
  {
    category: "builder",
    slug: "japan-house-exterior-03",
    title: "Japanese traditional style house / 大内宿",
    creator: "TANAKA Juuyoh (田中十洋)",
    license: "CC BY 2.0",
    license_url: "https://creativecommons.org/licenses/by/2.0/",
    source: "Flickr via Openverse",
    source_page: "https://www.flickr.com/photos/13910409@N05/3908054520",
    image_url: "https://live.staticflickr.com/3446/3908054520_65b2645bc1_b.jpg",
  },
  {
    category: "builder",
    slug: "japan-house-interior",
    title: "Interior of a Japanese House",
    creator: "Auchmuty Library, UON",
    license: "Public Domain Mark",
    license_url: "https://creativecommons.org/publicdomain/mark/1.0/",
    source: "Wikimedia Commons",
    source_page: "https://commons.wikimedia.org/wiki/File:Interior_of_a_Japanese_House_(9606072302).jpg",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Interior_of_a_Japanese_House_%289606072302%29.jpg",
  },
  {
    category: "builder",
    slug: "japan-carpenter-at-work",
    title: "Japanese workmen: A carpenter working, Japan.",
    creator: "National Museum of Denmark from Denmark",
    license: "No known copyright restrictions",
    license_url: "https://www.flickr.com/commons/usage/",
    source: "Wikimedia Commons",
    source_page: "https://commons.wikimedia.org/wiki/File:Japanese_workmen_A_carpenter_working,_Japan._(10796473724).jpg",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Japanese_workmen_A_carpenter_working%2C_Japan._%2810796473724%29.jpg",
  },
  {
    category: "office",
    slug: "japan-office-building-okinawa",
    title: "Office building (Naha, Okinawa, Japan)",
    creator: "Masayuki (Yuki) Kawagishi",
    license: "CC BY 2.0",
    license_url: "https://creativecommons.org/licenses/by/2.0/",
    source: "Wikimedia Commons",
    source_page: "https://commons.wikimedia.org/wiki/File:Office_building_(4465966615).jpg",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Office_building_%284465966615%29.jpg",
  },
  {
    category: "fire-safety",
    slug: "japan-fire-alarm-hydrant",
    title: "Fire alarm & indoor fire hydrant",
    creator: "100yen",
    license: "CC BY-SA 3.0",
    license_url: "https://creativecommons.org/licenses/by-sa/3.0/",
    source: "Wikimedia Commons",
    source_page: "https://commons.wikimedia.org/wiki/File:Fire_alarm_%26_indoor_fire_hydrant.JPG",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Fire_alarm_%26_indoor_fire_hydrant.JPG",
  },
  {
    category: "fire-safety",
    slug: "japan-fire-alarm-ikebukuro",
    title: "Fire alarm - Ikebukuro Station",
    creator: "midorisyu",
    license: "CC BY 2.0",
    license_url: "https://creativecommons.org/licenses/by/2.0/",
    source: "Wikimedia Commons",
    source_page: "https://commons.wikimedia.org/wiki/File:Fire_alarm_-Ikebukuro.jpg",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Fire_alarm_-Ikebukuro.jpg",
  },
  {
    category: "fire-safety",
    slug: "japan-fire-alarm-panel",
    title: "Noumi R Fire Alarm Control Panel",
    creator: "Darklanlan",
    license: "CC BY 4.0",
    license_url: "https://creativecommons.org/licenses/by/4.0/",
    source: "Wikimedia Commons via Openverse",
    source_page: "https://commons.wikimedia.org/wiki/File:Noumi_R_Fire_Alarm_Control_Panel.jpg",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Noumi_R_Fire_Alarm_Control_Panel.jpg",
  },
  {
    category: "fire-safety",
    slug: "japan-fire-alarm-direct",
    title: "Fire alarm",
    creator: "chidorian",
    license: "CC BY-SA 2.0",
    license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
    source: "Flickr via Openverse",
    source_page: "https://www.flickr.com/photos/21518596@N00/7666930",
    image_url: "https://live.staticflickr.com/7/7666930_793ab3660b_b.jpg",
  },
  {
    category: "factory",
    slug: "japan-gold-factory-kanazawa",
    title: "Kanazawa Gold Factory",
    creator: "Eckhard Pecher",
    license: "CC BY 2.5",
    license_url: "https://creativecommons.org/licenses/by/2.5/",
    source: "Wikimedia Commons via Openverse",
    source_page: "https://commons.wikimedia.org/wiki/File:Kanazawa_Gold_Factory.jpg",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/d/da/Kanazawa_Gold_Factory.jpg",
  },
  {
    category: "factory",
    slug: "japan-industrial-complex-yokkaichi",
    title: "Yokkaichi industrial complex",
    creator: "Bebel / Nene Solano",
    license: "CC BY 2.0",
    license_url: "https://creativecommons.org/licenses/by/2.0/",
    source: "Flickr via Openverse",
    source_page: "https://www.flickr.com/photos/105852589@N03/12686290865",
    image_url: "https://live.staticflickr.com/2878/12686290865_4b7aebe001_b.jpg",
  },
];

function extensionFromUrl(url) {
  const pathname = new URL(url).pathname;
  return path.extname(pathname) || ".jpg";
}

async function downloadBinary(url, outPath) {
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    const response = await fetch(url, {
      headers: {
        "user-agent": "Mozilla/5.0",
      },
    });
    if (response.ok) {
      const arrayBuffer = await response.arrayBuffer();
      fs.writeFileSync(outPath, Buffer.from(arrayBuffer));
      return;
    }
    if (response.status !== 429 || attempt === 4) {
      throw new Error(`Failed to download ${url}: ${response.status}`);
    }
    await new Promise((resolve) => setTimeout(resolve, 5000 * attempt));
  }
}

async function main() {
  const requested = process.argv.slice(2);
  const selectedEntries =
    requested.length > 0
      ? entries.filter((entry) => requested.includes(entry.slug))
      : entries;
  if (requested.length === 0) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });

  const manifest = fs.existsSync(manifestPath)
    ? JSON.parse(fs.readFileSync(manifestPath, "utf8"))
    : [];

  for (const [index, entry] of selectedEntries.entries()) {
    const entryIndex = entries.findIndex((candidate) => candidate.slug === entry.slug) + 1;
    const ext = extensionFromUrl(entry.image_url);
    const filename = `${String(entryIndex).padStart(2, "0")}-${entry.slug}${ext}`;
    const outputPath = path.join(outputDir, filename);
    try {
      await downloadBinary(entry.image_url, outputPath);
    } catch (error) {
      console.error(`Skipped ${filename}: ${error.message}`);
      continue;
    }
    const item = {
      id: entryIndex,
      category: entry.category,
      title: entry.title,
      creator: entry.creator,
      license: entry.license,
      license_url: entry.license_url,
      source: entry.source,
      source_page: entry.source_page,
      image_url: entry.image_url,
      downloaded_file: filename,
    };
    const existingIndex = manifest.findIndex((manifestEntry) => manifestEntry.downloaded_file === filename);
    if (existingIndex >= 0) manifest[existingIndex] = item;
    else manifest.push(item);
    console.log(`Downloaded ${filename}`);
  }

  manifest.sort((a, b) => a.id - b.id);
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  fs.writeFileSync(
    readmePath,
    [
      "# Japan-Like Free Stock Images",
      "",
      "This set is manually curated for this project.",
      "It keeps only Japanese or clearly Japan-derived images that are safer to use as demo placeholders.",
      "",
      "Folder purpose:",
      "- demo-site placeholder imagery",
      "- Japanese-looking mood/reference shots",
      "- industry-adjacent visuals for construction, office, fire-safety, and workshop pages",
      "",
      "Important:",
      "- Check `manifest.json` before publication.",
      "- Some files require attribution or share-alike handling.",
      "- These are for internal demo use unless you confirm the license requirements.",
      "",
      `Count: ${manifest.length}`,
      "",
    ].join("\n"),
    "utf8",
  );

  console.log(`Saved ${manifest.length} curated files to ${outputDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
