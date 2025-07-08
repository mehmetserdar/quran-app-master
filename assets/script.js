const indexPage = () => {
 
  $("#time").click(() => {
    mevcutDegil();
  });
  $("#dua").click(() => {
    document.location.href = "dua-list.html";
  });
  $("#sure").click(() => {
    document.location.href = "sure-list.html";
  });
  $("#abdest").click(() => {
    document.location.href = "abdest.html";
  });
  $("#sayac").click(() => {
    document.location.href = "counter.html";
  });
  $("#bookmark").click(() => {
    document.location.href = "bookmark.html";
  });
  $("#settings").click(() => {
    document.location.href = "settings.html";
  });
  $("#app").click(() => {
    document.location.href =
      "https://play.google.com/store/apps/details?id=com.mobuyg.kuran";
  });
  $("#other").click(() => {
    document.location.href =
      "https://play.google.com/store/apps/dev?id=7123957245789156225";
  });

  $(".full-screen").click(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });

  const mevcutDegil = () => {
    alert("Sayfa mevcut değil");
  };
};
const lang = localStorage.getItem("langValue");
function loadLanguage() {
  if (lang == null) {
    localStorage.setItem("langValue", "tr");
  }
}

const meal = localStorage.getItem("mealValue");
function loadMeal() {
  if (meal == null) {
    localStorage.setItem("mealValue", "vakif");
  }
}

var userLang =
  navigator.language || navigator.userLanguage || navigator.systemLanguage;
const duaListPage = () => {
  //dua-list.html

  let i = 1;
  dua.forEach((d) => {
    const html = `<li id="${i}" class="dua list-group-item list-group-item-dark ">${d.name}</li>`;
    $("#list-dua").append(html);
    i++;
  });

  $(".dua").click((e) => {
    document.location.href = `dua.html?${$(e.target).attr("id")}`;
  });
};

const duaPage = () => {
  //dua.html
  const url = window.location.href;
  const id = url.substr(url.indexOf("?") + 1);

  d = dua[id - 1];

  $(".title").text(`${d.name}`);
  $(".baslik").text(`${d.name}`);
  $(".yazi-arab").text(d.arab);
  $(".yazi-en").text(d.turk);
  $(".yazi-turk").text(d.en);
};

const sureListPage = () => {
  //sure-list.html

  let i = 1;
  sure.forEach((d) => {
    const html = `<li id="${i}" class="sure list-group-item list-group-item-dark ">${d.name}</li>`;
    $("#list-sure").append(html);
    i++;
  });

  $(".sure").click((e) => {
    document.location.href = `sure.html?${$(e.target).attr("id")}`;
  });
};

const surePage = () => {
  //sure.html
  const url = window.location.href;
  const id = url.substr(url.indexOf("?") + 1);

  d = sure[id - 1];

  $(".title").text(`${d.name}`);
  $(".baslik").text(`${d.name}`);
  $(".yazi-arab").text(d.arab);
  $(".yazi-en").text(d.turk);
  $(".yazi-turk").text(d.en);
};

const quranPage = () => {
  //Quran.html
  $.get("https://api.alquran.cloud/v1/surah", (data) => {
    contentList(data.data);
    $(".loading").css("display", "none");
  });

  const contentList = (data) => {
    let i = 1;

    let sureler = [
      "",
      "Fatiha",
      "Bakara",
      "Ali İmran",
      "Nisa",
      "Maide",
      "Enam",
      "Araf",
      "Enfal",
      "Tevbe",
      "Yunus",
      "Hud",
      "Yusuf",
      "Rad",
      "İbrahim",
      "Hicr",
      "Nahl",
      "İsra",
      "Kehf",
      "Meryem",
      "Taha",
      "Enbiya",
      "Hacc",
      "Muminun",
      "Nur",
      "Furkan",
      "Şuara",
      "Neml",
      "Kasas",
      "Ankebut",
      "Rum",
      "Lokman",
      "Secde",
      "Ahzab",
      "Sebe",
      "Fatır",
      "Yasin",
      "Saffat",
      "Sad",
      "Zümer",
      "Mümin",
      "Fussilet",
      "Şura",
      "Zuhruf",
      "Duhan",
      "Casiye",
      "Ahkaf",
      "Muhammed",
      "Fetih",
      "Hucurat",
      "Kaf",
      "Zariyat",
      "Tur",
      "Necm",
      "Kamer",
      "Rahman",
      "Vakıa",
      "Hadid",
      "Mücadele",
      "Haşr",
      "Mümtahine",
      "Saff",
      "Cuma",
      "Münafikun",
      "Tegabun",
      "Talak",
      "Tahrim",
      "Mülk",
      "Kalem",
      "Hakka",
      "Mearic",
      "Nuh",
      "Cinn",
      "Müzzemmil",
      "Müddessir",
      "Kıyamet",
      "İnsan",
      "Mürselat",
      "Nebe",
      "Naziat",
      "Abese",
      "Tekvir",
      "İnfitar",
      "Mutaffifin",
      "İnşikak",
      "Buruc",
      "Tarık",
      "Ala",
      "Gaşiye",
      "Fecr",
      "Beled",
      "Şems",
      "Leyl",
      "Duha",
      "İnşirah",
      "Tin",
      "Alak",
      "Kadir",
      "Beyyine",
      "Zilzal",
      "Adiyat",
      "Karia",
      "Tekasur",
      "Asr",
      "Hümeze",
      "Fil",
      "Kureyş",
      "Maun",
      "Kevser",
      "Kafirun",
      "Nasr",
      "Leheb",
      "İhlas",
      "Felak",
      "Nas",
    ];
    if (lang == "tr") {
      data.forEach((d) => {
        const elemenList = `<tr  class="">
                            <th class="td1" width="30"><div class="no_s">${i}</div> </th>
                            
                            <td class="td2 strong name_s" no-surah="${d.number}">${sureler[i]}</td>
                            <td class="td2 text-right">${d.numberOfAyahs} Ayet</td>
                        </tr>`;
        $("#list").append(elemenList);
        i++;
      });
    } else {
      data.forEach((d) => {
        const elemenList = `<tr  class="">
                            <th class="td1" width="30"><div class="no_s">${i}</div> </th>
                            
                            <td class="td2 strong name_s" no-surah="${d.number}">${d.englishName}</td>
                            <td class="td2 text-right">${d.numberOfAyahs} Verses</td>
                        </tr>`;
        $("#list").append(elemenList);
        i++;
      });
    }

    $(".name_s").click((e) => {
      document.location.href = `surah.html?${$(e.target).attr("no-surah")}`;
    });
  };

  $(".fa-bookmark").click((e) => {
    e.preventDefault();
    document.location.href = "bookmark.html";
  });
};

const surahPage = () => {
  //Surah.html
  const url = window.location.href;
  let no_s = "";
  let no_a;

  if (url.search("#") != -1) {
    no_s = url.substring(url.indexOf("?") + 1, url.indexOf("#"));
    no_a = url.substr(url.indexOf("#") + 1);
  } else {
    no_s = url.substr(url.indexOf("?") + 1);
  }
  /*  ,  de.khoury  ,  */
  switch (lang) {
    case "id":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.alafasy,id.indonesian`;
      break;
    case "de":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.alafasy,de.khoury`;
      break;
    case "es":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.alafasy,es.cortes`;
      break;
    case "ru":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.alafasy,ru.kuliev`;
      break;
    case "fr":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.alafasy,fr.hamidullah`;
      break;
    case "en":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.alafasy,en.asad`;
      break;
    case "ur":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.alafasy,ur.ahmedali`;
      break;
    case "hi":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.alafasy,hi.farooq`;
      break;
    case "bs":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.alafasy,bs.korkut`;
      break;
    case "az":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.alafasy,az.musayev`;
      break;
    case "ug":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.alafasy,ug.saleh`;
      break;
    default:
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.alafasy,tr.diyanet`;
      break;
  }

  if (lang == "tr") {
    switch (meal) {
      case "vakfi":
        var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.alafasy,tr.vakfi`;
        break;
      case "yazir":
        var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.alafasy,tr.yazir`;
        break;
      case "golpinar":
        var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.alafasy,tr.golpinarli`;
        break;
      case "ozturk":
        var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.alafasy,tr.ozturk`;
        break;
      case "ates":
        var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.alafasy,tr.ates`;
        break;
    }
  }

  let surah = [];
  let totalAyat;
  let sureler = [
    "",
    "Fatiha",
    "Bakara",
    "Ali İmran",
    "Nisa",
    "Maide",
    "Enam",
    "Araf",
    "Enfal",
    "Tevbe",
    "Yunus",
    "Hud",
    "Yusuf",
    "Rad",
    "İbrahim",
    "Hicr",
    "Nahl",
    "İsra",
    "Kehf",
    "Meryem",
    "Taha",
    "Enbiya",
    "Hacc",
    "Muminun",
    "Nur",
    "Furkan",
    "Şuara",
    "Neml",
    "Kasas",
    "Ankebut",
    "Rum",
    "Lokman",
    "Secde",
    "Ahzab",
    "Sebe",
    "Fatır",
    "Yasin",
    "Saffat",
    "Sad",
    "Zümer",
    "Mümin",
    "Fussilet",
    "Şura",
    "Zuhruf",
    "Duhan",
    "Casiye",
    "Ahkaf",
    "Muhammed",
    "Fetih",
    "Hucurat",
    "Kaf",
    "Zariyat",
    "Tur",
    "Necm",
    "Kamer",
    "Rahman",
    "Vakıa",
    "Hadid",
    "Mücadele",
    "Haşr",
    "Mümtahine",
    "Saff",
    "Cuma",
    "Münafikun",
    "Tegabun",
    "Talak",
    "Tahrim",
    "Mülk",
    "Kalem",
    "Hakka",
    "Mearic",
    "Nuh",
    "Cinn",
    "Müzzemmil",
    "Müddessir",
    "Kıyamet",
    "İnsan",
    "Mürselat",
    "Nebe",
    "Naziat",
    "Abese",
    "Tekvir",
    "İnfitar",
    "Mutaffifin",
    "İnşikak",
    "Buruc",
    "Tarık",
    "Ala",
    "Gaşiye",
    "Fecr",
    "Beled",
    "Şems",
    "Leyl",
    "Duha",
    "İnşirah",
    "Tin",
    "Alak",
    "Kadir",
    "Beyyine",
    "Zilzal",
    "Adiyat",
    "Karia",
    "Tekasur",
    "Asr",
    "Hümeze",
    "Fil",
    "Kureyş",
    "Maun",
    "Kevser",
    "Kafirun",
    "Nasr",
    "Leheb",
    "İhlas",
    "Felak",
    "Nas",
  ];

  $.get(url_api, (data) => {
    isiData(data.data);
    totalAyat = data.data[0].numberOfAyahs;
    $(".loading").css("display", "none");
    $(".baslik").text(`${sureler[data.data[1].number]}`);
    $("#title").text(`${sureler[data.data[1].number]}`);
    $(".title").text(`${sureler[data.data[1].number]}`);
  });

  const isiData = (data) => {
    for (let i = 0; i < data[0].numberOfAyahs; i++) {
      const obj = {
        arab: "",
        tr: "",
        en: "",
        ru: "",
        es: "",
        de: "",
        fr: "",
        id: "",
        ur: "",
        hi: "",
        bs: "",
        az: "",
        ug: "",
        audio: "",
      };
      surah.push(obj);
    }

    let i = 0;
    data[0].ayahs.forEach((ayah) => {
      surah[i].audio = ayah.audio;

      i++;
    });
    i = 0;
    data[0].ayahs.forEach((ayah) => {
      surah[i].arab = ayah.text;

      i++;
    });

    switch (lang) {
      case "en":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].en = ayah.text;

          i++;
        });
        break;
      case "ru":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].ru = ayah.text;

          i++;
        });
        break;
      case "es":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].es = ayah.text;

          i++;
        });
        break;
      case "de":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].de = ayah.text;

          i++;
        });
        break;
      case "fr":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].fr = ayah.text;

          i++;
        });
        break;
      case "id":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].id = ayah.text;

          i++;
        });
        break;
      case "ur":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].ur = ayah.text;

          i++;
        });
        break;
      case "hi":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].hi = ayah.text;

          i++;
        });
        break;
      case "bs":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].bs = ayah.text;

          i++;
        });
        break;
      case "az":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].az = ayah.text;

          i++;
        });
        break;
      case "ug":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].ug = ayah.text;

          i++;
        });
        break;
      default:
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].tr = ayah.text;

          i++;
        });
        break;
    }

    showData();
  };
  

  

  const showData = () => {
    i = 1;
    surah.forEach((ayah) => {
      const elementList = `<li class="list-item" id="${i}">
            <div class="item-icon">
                <div class="no-ayat"  data-id="${i-1}">
                    ${i}
                </div>
                
                <a class="text text-dark"><i class="fas fa-star fa-lg" data-id="${i}" id="star"></i></a>
            </div>
            <div class="item-yazi">
                <div class="yazi-arab">${ayah.arab}</div>
                <div class="yazi-tr">${ayah.tr}</div>
                <div class="yazi-tr">${ayah.en}</div>
                <div class="yazi-tr">${ayah.ru}</div>
                <div class="yazi-tr">${ayah.de}</div>
                <div class="yazi-tr">${ayah.es}</div>
                <div class="yazi-tr">${ayah.fr}</div>
                <div class="yazi-tr">${ayah.id}</div>
                <div class="yazi-arab2">${ayah.ur}</div>
                <div class="yazi-tr">${ayah.hi}</div>
                <div class="yazi-tr">${ayah.bs}</div>
                <div class="yazi-tr">${ayah.az}</div>
                <div class="yazi-arab2">${ayah.ug}</div>
            </div>
        </li>`;

      $("#list-ayah").append(elementList);

      i++;
    });
    

    $(".no-ayat").click((e) => {
      methodPlay2(e);
    });
    $(".fa-stop").click((e) => {
      stopAudio(e);
    });
    $(".fa-star").click((e) => {
      const toast = document.querySelector(".toast-not");
      toast.style.visibility = "visible";
      methodBookmark(e);
    });

    if (url.search("#") != -1) {
      document.getElementById(no_a).scrollIntoView();
    }
  };

  let isPlaying = false;
  let currentAudioIndex = 0;


  const methodPlay = () => {
    if (!isPlaying) {
      playAudio(currentAudioIndex);
    } else {
      stopAudio();
    }
  };

  const methodPlay2 = (e) => {
    //onAudio();
    playAudio($(e.target).attr("data-id"));
  };

  const playAudio = (no) => {
    if (isPlaying) {
      stopAudio();
    }

    const audioAyah = document.querySelector(".audioAyah");
    if (audioAyah) {
      audioAyah.remove();
    }

    const el = `<audio id="surahPlayer" src="${surah[no].audio}" type="audio/mp3" controls="controls" class="audioAyah"></audio>`;
    $(".container").append(el);

    const audioElement = document.getElementById("surahPlayer");
    audioElement.play();

    updateListProgress(no); // Call the updateListProgress function

    currentAudioIndex = no;

    audioElement.addEventListener("ended", () => {
      stopAudio();
      currentAudioIndex++;
      if (currentAudioIndex < totalAyat) {
        playAudio(currentAudioIndex);
      }
    });

    isPlaying = true;
    updatePlayButton(); // Update the play button to a pause button
  };

  const updateListProgress = (no) => {
    const calanSure = document.getElementsByClassName("list-item");
    // Reset the style for all list items
    for (let i = 0; i < calanSure.length; i++) {
      calanSure[i].setAttribute(
        "style",
        "background-color: none; border: 0px 1px 1px 1 px 1px solid grey; filter: blur(4px)"
      );
      document.querySelector('#surahPlayer').style.display = "none";

    }

    

    // Set the style for the currently playing item
    calanSure[no].setAttribute(
      "style",
      "background-color: lightgrey; border: 0px 1px 1px 1px solid grey"
    );
    // Scroll to the currently playing item
    calanSure[no].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
    

  };

  const stopAudio = () => {
    const audioAyah = document.getElementById("surahPlayer");
    if (audioAyah) {
      audioAyah.pause();
      audioAyah.currentTime = 0;
      audioAyah.remove();
    }
    isPlaying = false;

    const calanSure = document.getElementsByClassName("list-item");
    for (let i = 0; i < calanSure.length; i++) {
      calanSure[i].setAttribute(
        "style",
        "background-color: none; border: 0px 1px 1px 1px solid grey"
      );
    }
    updatePlayButton(); // Update the pause button to a play button
  };

  const updatePlayButton = () => {
    const playButton = document.getElementById("playButton");
    if (isPlaying) {
      playButton.innerHTML = '<i class="fa fa-pause fa-sm"></i> ';
      playButton.classList.remove("play");
      playButton.classList.add("pause");
      playButton.style.opacity = "0.3";

    } else {
      playButton.innerHTML = '<i class="fa fa-play fa-sm"></i> ';
      playButton.classList.remove("pause");
      playButton.classList.add("play");
      playButton.style.opacity = "1.0";

    }
  };

  // Event listener for the play button
  document.getElementById("playButton").addEventListener("click", methodPlay);

  // Event listener for the play button
  document.getElementById("playButton").addEventListener("click", methodPlay);

  const methodBookmark = (e) => {
    const bookmarkObj = {
      surah: no_s,
      ayat: $(e.target).attr("data-id"),
    };

    // Check if the bookmark already exists
    if (!checkBookmark(bookmarkObj)) {
      addData(bookmarkObj);
      $(".toast-not").toast("show");
      $(e.target).addClass("yellow-star");
    } else {
      $(".toast-existed").toast("show");
    }

    // Change the style of the element (e.g., add yellow star)
  };

  const checkBookmark = (bookmarkObj) => {
    // Read the data object where bookmarks are stored
    const bookmarks = getData();

    // Check if the bookmark object exists in the bookmarks data
    const exists = bookmarks.some((bookmark) => {
      return (
        bookmark.surah === bookmarkObj.surah &&
        bookmark.ayat === bookmarkObj.ayat
      );
    });

    return exists;
  };

  const getData = () => {
    // Retrieve the data object from storage (replace with your actual storage mechanism)
    const data = localStorage.getItem("bookmark");

    // Parse the data object if it exists, or initialize an empty array
    const bookmarks = data ? JSON.parse(data) : [];

    return bookmarks;
  };

  const addData = (bookmarkObj) => {
    // Retrieve existing bookmarks
    const bookmarks = getData();

    // Add the new bookmark object to the array
    bookmarks.push(bookmarkObj);

    // Save the updated bookmarks array to storage (replace with your actual storage mechanism)
    localStorage.setItem("bookmark", JSON.stringify(bookmarks));
  };

  const onAudio = () => {
    i = 1;
    surah.forEach((ayah) => {
      const el = `<audio id="surahPlayer" src="${ayah.audio}" type="audio/mp3" controls="controls" class="audioAyah audioAyah${i}"></audio>`;
      $(".list-audio").append(el);
      i++;
    });
  };
};

const bookmarkPage = () => {
  const data = readData();
  let i = 0;
  let sureler = [
    "",
    "Fatiha",
    "Bakara",
    "Ali İmran",
    "Nisa",
    "Maide",
    "Enam",
    "Araf",
    "Enfal",
    "Tevbe",
    "Yunus",
    "Hud",
    "Yusuf",
    "Rad",
    "İbrahim",
    "Hicr",
    "Nahl",
    "İsra",
    "Kehf",
    "Meryem",
    "Taha",
    "Enbiya",
    "Hacc",
    "Muminun",
    "Nur",
    "Furkan",
    "Şuara",
    "Neml",
    "Kasas",
    "Ankebut",
    "Rum",
    "Lokman",
    "Secde",
    "Ahzab",
    "Sebe",
    "Fatır",
    "Yasin",
    "Saffat",
    "Sad",
    "Zümer",
    "Mümin",
    "Fussilet",
    "Şura",
    "Zuhruf",
    "Duhan",
    "Casiye",
    "Ahkaf",
    "Muhammed",
    "Fetih",
    "Hucurat",
    "Kaf",
    "Zariyat",
    "Tur",
    "Necm",
    "Kamer",
    "Rahman",
    "Vakıa",
    "Hadid",
    "Mücadele",
    "Haşr",
    "Mümtahine",
    "Saff",
    "Cuma",
    "Münafikun",
    "Tegabun",
    "Talak",
    "Tahrim",
    "Mülk",
    "Kalem",
    "Hakka",
    "Mearic",
    "Nuh",
    "Cinn",
    "Müzzemmil",
    "Müddessir",
    "Kıyamet",
    "İnsan",
    "Mürselat",
    "Nebe",
    "Naziat",
    "Abese",
    "Tekvir",
    "İnfitar",
    "Mutaffifin",
    "İnşikak",
    "Buruc",
    "Tarık",
    "Ala",
    "Gaşiye",
    "Fecr",
    "Beled",
    "Şems",
    "Leyl",
    "Duha",
    "İnşirah",
    "Tin",
    "Alak",
    "Kadir",
    "Beyyine",
    "Zilzal",
    "Adiyat",
    "Karia",
    "Tekasur",
    "Asr",
    "Hümeze",
    "Fil",
    "Kureyş",
    "Maun",
    "Kevser",
    "Kafirun",
    "Nasr",
    "Leheb",
    "İhlas",
    "Felak",
    "Nas",
  ];

  let surahNames = [
    "",
    "Al-Fatiha",
    "Al-Baqara",
    "Al Imran",
    "An-Nisa",
    "Al-Ma'ida",
    "Al-An'am",
    "Al-A'raf",
    "Al-Anfal",
    "At-Tawba",
    "Yunus",
    "Houd",
    "Yusuf",
    "Ar-Ra'd",
    "Ibraheem",
    "Al-Hijr",
    "An-Nahl",
    "Al-Isra",
    "Al-Kahf",
    "Maryam",
    "Ta-Ha",
    "Al-Anbiya",
    "Al-Hajj",
    "Al-Mu'minoon",
    "An-Nour",
    "Al-Furqan",
    "Ash-Shu'ara",
    "An-Naml",
    "Al-Qasas",
    "Al-Ankabut",
    "Ar-Roum",
    "Luqman",
    "As-Sajda",
    "Al-Ahzab",
    "Saba",
    "Fatir",
    "Yaseen",
    "As-Saffat",
    "Sad",
    "Az-Zumar",
    "Ghafir",
    "Fussilat",
    "Ash-Shura",
    "Az-Zukhruf",
    "Ad-Dukhan",
    "Al-Jathiya",
    "Al-Ahqaf",
    "Muhammad",
    "Al-Fath",
    "Al-Hujurat",
    "Qaf",
    "Adh-Dhariyat",
    "At-Tour",
    "An-Najm",
    "Al-Qamar",
    "Ar-Rahman",
    "Al-Waqi'a",
    "Al-Hadeed",
    "Al-Mujadila",
    "Al-Hashr",
    "Al-Mumtahana",
    "As-Saff",
    "Al-Jumu'aa",
    "Al-Munafiqoun",
    "At-Taghabun",
    "At-Talaq",
    "At-Tahreem",
    "Al-Mulk",
    "Al-Qalam",
    "Al-Haqqa",
    "Al-Ma'aarij",
    "Nouh",
    "Al-Jinn",
    "Al-Muzzammil",
    "Al-Muddathir",
    "Al-Qiyama",
    "Al-Insan",
    "Al-Mursalat",
    "An-Naba'",
    "An-Nazi'at",
    "Abasa",
    "At-Takweer",
    "Al-Infitar",
    "Al-Mutaffifeen",
    "Al-Inshiqaq",
    "Al-Burooj",
    "At-Tariq",
    "Al-A'la",
    "Al-Ghashiyah",
    "Al-Fajr",
    "Al-Balad",
    "Ash-Shams",
    "Al-Lail",
    "Ad-Dhuha",
    "Al-Inshirah",
    "At-Teen",
    "Al-Alaq",
    "Al-Qadr",
    "Al-Bayyina",
    "Az-Zalzala",
    "Al-Adiyat",
    "Al-Qaria",
    "At-Takathur",
    "Al-Asr",
    "Al-Humaza",
    "Al-Feel",
    "Quraysh",
    "Al-Maa'oun",
    "Al-Kawthar",
    "Al-Kafiroun",
    "An-Nasr",
    "Al-Masad",
    "Al-Ikhlas",
    "Al-Falaq",
    "Al-Nas",
  ];
  data.forEach((d) => {
    if (lang == "tr") {
      const html = `<li class="bookmark list-group-item list-group-item d-flex justify-content-between align-items-center " data-surah="${
        d.surah
      }" data-ayat="${d.ayat}" index="${i}" id="${i}">
        ${sureler[d.surah]}:${d.ayat}
        <span class="badge badge-danger badge-pill">X</span>
    </li`;
      $("#list-bookmark").append(html);
      i++;
    } else {
      const html = `<li class="bookmark list-group-item list-group-item d-flex justify-content-between align-items-center " data-surah="${
        d.surah
      }" data-ayat="${d.ayat}" index="${i}" id="${i}">
        ${surahNames[d.surah]}:${d.ayat}
        <span class="badge badge-danger badge-pill">X</span>
    </li`;
      $("#list-bookmark").append(html);
      i++;
    }
  });

  $(".bookmark").click((e) => {
    document.location.href = `surah.html?${$(e.target).attr("data-surah")}#${$(
      e.target
    ).attr("data-ayat")}`;
  });
  $(".bookmark span").click((e) => {
    e.stopPropagation();
    const id = $(e.target.parentElement).attr("index");
    deleteData(id);
    $("li").remove(`#${id}`);
  });
};

// Check if User Agent is Android
const isAndroid = /Android/i.test(navigator.userAgent);

// Hide Navigation Menu on Android Devices
if (isAndroid) {
  const nav = document.querySelector("header");
  nav.style.display = "none";
}

$(document).ready(function() {
    // Loading screen
    setTimeout(function() {
        $('#loadingOverlay').addClass('fade-out');
        setTimeout(function() {
            $('#loadingOverlay').remove();
        }, 500);
    }, 1500);
    
    // Initialize language and meal
    if (typeof loadLanguage === 'function') {
        loadLanguage();
    }
    if (typeof loadMeal === 'function') {
        loadMeal();
    }
    
    // Günün ayetini yükle - FIX: Fonksiyon tanımlandıktan sonra çağır
    if (typeof getDailyVerseWithCache === 'function') {
        getDailyVerseWithCache();
    }
    
    // Hero section main buttons
    $('#startReadingBtn').off('click').on('click', function(e) {
        e.preventDefault();
        console.log('Start Reading button clicked!');
        window.location.href = 'quran.html';
    });
    
    $('#tasbeehBtn').off('click').on('click', function(e) {
        e.preventDefault();
        console.log('Tasbeeh button clicked!');
        window.location.href = 'counter.html';
    });
    
    // Alternative method using direct event binding
    const startBtn = document.getElementById('startReadingBtn');
    const tasbeehBtn = document.getElementById('tasbeehBtn');
    
    if (startBtn) {
        startBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Direct event: Start Reading clicked!');
            window.location.href = 'quran.html';
        });
    }
    
    if (tasbeehBtn) {
        tasbeehBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Direct event: Tasbeeh clicked!');
            window.location.href = 'counter.html';
        });
    }
    
    // ...rest of existing code...
});

// Günün Ayeti Fonksiyonları - Başta tanımlanmalı
function getDailyVerse() {
    // Rastgele sure ve ayet seçimi
    const randomSurah = Math.floor(Math.random() * 114) + 1;
    
    // Her sure için ayet sayıları (yaklaşık değerler)
    const surahAyahCounts = {
        1: 7, 2: 286, 3: 200, 4: 176, 5: 120, 6: 165, 7: 206, 8: 75, 9: 129, 10: 109,
        11: 123, 12: 111, 13: 43, 14: 52, 15: 99, 16: 128, 17: 111, 18: 110, 19: 98, 20: 135,
        21: 112, 22: 78, 23: 118, 24: 64, 25: 77, 26: 227, 27: 93, 28: 88, 29: 69, 30: 60,
        31: 34, 32: 30, 33: 73, 34: 54, 35: 45, 36: 83, 37: 182, 38: 88, 39: 75, 40: 85,
        41: 54, 42: 53, 43: 89, 44: 59, 45: 37, 46: 35, 47: 38, 48: 29, 49: 18, 50: 45,
        51: 60, 52: 49, 53: 62, 54: 55, 55: 78, 56: 96, 57: 29, 58: 22, 59: 24, 60: 13,
        61: 14, 62: 11, 63: 11, 64: 18, 65: 12, 66: 12, 67: 30, 68: 52, 69: 52, 70: 44,
        71: 28, 72: 28, 73: 20, 74: 56, 75: 40, 76: 31, 77: 50, 78: 40, 79: 46, 80: 42,
        81: 29, 82: 19, 83: 36, 84: 25, 85: 22, 86: 17, 87: 19, 88: 26, 89: 30, 90: 20,
        91: 15, 92: 21, 93: 11, 94: 8, 95: 8, 96: 19, 97: 5, 98: 8, 99: 8, 100: 11,
        101: 11, 102: 8, 103: 3, 104: 9, 105: 5, 106: 4, 107: 7, 108: 3, 109: 6, 110: 3,
        111: 5, 112: 4, 113: 5, 114: 6
    };
    
    const maxAyah = surahAyahCounts[randomSurah] || 10;
    const randomAyah = Math.floor(Math.random() * maxAyah) + 1;
    
    // Sure isimleri
    const surahNames = {
        1: "Fatiha", 2: "Bakara", 3: "Ali İmran", 4: "Nisa", 5: "Maide", 6: "Enam", 7: "Araf", 8: "Enfal", 9: "Tevbe", 10: "Yunus",
        11: "Hud", 12: "Yusuf", 13: "Rad", 14: "İbrahim", 15: "Hicr", 16: "Nahl", 17: "İsra", 18: "Kehf", 19: "Meryem", 20: "Taha",
        21: "Enbiya", 22: "Hacc", 23: "Muminun", 24: "Nur", 25: "Furkan", 26: "Şuara", 27: "Neml", 28: "Kasas", 29: "Ankebut", 30: "Rum",
        31: "Lokman", 32: "Secde", 33: "Ahzab", 34: "Sebe", 35: "Fatır", 36: "Yasin", 37: "Saffat", 38: "Sad", 39: "Zümer", 40: "Mümin",
        41: "Fussilet", 42: "Şura", 43: "Zuhruf", 44: "Duhan", 45: "Casiye", 46: "Ahkaf", 47: "Muhammed", 48: "Fetih", 49: "Hucurat", 50: "Kaf",
        51: "Zariyat", 52: "Tur", 53: "Necm", 54: "Kamer", 55: "Rahman", 56: "Vakıa", 57: "Hadid", 58: "Mücadele", 59: "Haşr", 60: "Mümtahine",
        61: "Saff", 62: "Cuma", 63: "Münafikun", 64: "Tegabun", 65: "Talak", 66: "Tahrim", 67: "Mülk", 68: "Kalem", 69: "Hakka", 70: "Mearic",
        71: "Nuh", 72: "Cinn", 73: "Müzzemmil", 74: "Müddessir", 75: "Kıyamet", 76: "İnsan", 77: "Mürselat", 78: "Nebe", 79: "Naziat", 80: "Abese",
        81: "Tekvir", 82: "İnfitar", 83: "Mutaffifin", 84: "İnşikak", 85: "Buruc", 86: "Tarık", 87: "Ala", 88: "Gaşiye", 89: "Fecr", 90: "Beled",
        91: "Şems", 92: "Leyl", 93: "Duha", 94: "İnşirah", 95: "Tin", 96: "Alak", 97: "Kadir", 98: "Beyyine", 99: "Zilzal", 100: "Adiyat",
        101: "Karia", 102: "Tekasur", 103: "Asr", 104: "Hümeze", 105: "Fil", 106: "Kureyş", 107: "Maun", 108: "Kevser", 109: "Kafirun", 110: "Nasr",
        111: "Leheb", 112: "İhlas", 113: "Felak", 114: "Nas"
    };
    
    // Meal türü kontrolü
    const mealType = localStorage.getItem("mealValue") || "diyanet";
    let mealIdentifier = "tr.diyanet";
    
    switch (mealType) {
        case "vakfi":
            mealIdentifier = "tr.vakfi";
            break;
        case "yazir":
            mealIdentifier = "tr.yazir";
            break;
        case "golpinar":
            mealIdentifier = "tr.golpinarli";
            break;
        case "ozturk":
            mealIdentifier = "tr.ozturk";
            break;
        case "ates":
            mealIdentifier = "tr.ates";
            break;
        default:
            mealIdentifier = "tr.diyanet";
    }
    
    // API URL'si
    const apiUrl = `https://api.alquran.cloud/v1/ayah/${randomSurah}:${randomAyah}/editions/ar.alafasy,${mealIdentifier}`;
    
    // Loading state
    if (document.getElementById('dailyVerseCard')) {
        document.getElementById('dailyVerseCard').innerHTML = `
            <div class="text-center py-8">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
                <p class="text-gray-600">Günün ayeti yükleniyor...</p>
            </div>
        `;
    }
    
    // API çağrısı
    if (typeof $ !== 'undefined') {
        $.get(apiUrl)
            .done(function(data) {
                if (data.code === 200 && data.data && data.data.length >= 2) {
                    const arabicText = data.data[0].text;
                    const turkishText = data.data[1].text;
                    const surahName = surahNames[randomSurah] || "Bilinmeyen";
                    
                    updateDailyVerse(arabicText, turkishText, surahName, randomSurah, randomAyah);
                } else {
                    showDefaultVerse();
                }
            })
            .fail(function() {
                showDefaultVerse();
            });
    } else {
        // Fetch API fallback
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.code === 200 && data.data && data.data.length >= 2) {
                    const arabicText = data.data[0].text;
                    const turkishText = data.data[1].text;
                    const surahName = surahNames[randomSurah] || "Bilinmeyen";
                    
                    updateDailyVerse(arabicText, turkishText, surahName, randomSurah, randomAyah);
                } else {
                    showDefaultVerse();
                }
            })
            .catch(() => {
                showDefaultVerse();
            });
    }
}

// Günün ayetini güncelle
function updateDailyVerse(arabicText, turkishText, surahName, surahNumber, ayahNumber) {
    const dailyVerseHtml = `
        <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Günün Ayeti</h3>
            <div class="w-20 h-1 bg-green-600 rounded mx-auto"></div>
        </div>
        <div class="arabic-text text-center mb-6 text-gray-800 leading-relaxed">
            ${arabicText}
        </div>
        <p class="text-gray-600 text-center mb-6 italic">
            "${turkishText}"
        </p>
        <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">${surahName} Suresi ${surahNumber}:${ayahNumber}</span>
            <div class="flex space-x-2">
                <button class="text-green-600 hover:text-green-800 transition" onclick="bookmarkVerse(${surahNumber}, ${ayahNumber})" title="Favorilere Ekle">
                    <i class="fas fa-bookmark text-lg"></i>
                </button>
                <button class="text-blue-600 hover:text-blue-800 transition" onclick="shareVerse('${surahName}', ${surahNumber}, ${ayahNumber})" title="Paylaş">
                    <i class="fas fa-share-alt text-lg"></i>
                </button>
                <button class="text-purple-600 hover:text-purple-800 transition" onclick="goToVerse(${surahNumber}, ${ayahNumber})" title="Tam Sayfaya Git">
                    <i class="fas fa-external-link-alt text-lg"></i>
                </button>
            </div>
        </div>
    `;
    
    if (document.getElementById('dailyVerseCard')) {
        document.getElementById('dailyVerseCard').innerHTML = dailyVerseHtml;
    }
    
    // Önbelleğe kaydet
    cacheDailyVerse(arabicText, turkishText, surahName, surahNumber, ayahNumber);
}

// Varsayılan ayet göster
function showDefaultVerse() {
    const defaultVerseHtml = `
        <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Günün Ayeti</h3>
            <div class="w-20 h-1 bg-green-600 rounded mx-auto"></div>
        </div>
        <div class="arabic-text text-center mb-6 text-gray-800">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </div>
        <p class="text-gray-600 text-center mb-4 italic">
            "Rahman ve Rahim olan Allah'ın adıyla"
        </p>
        <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">Fatiha Suresi 1:1</span>
            <div class="flex space-x-2">
                <button class="text-green-600 hover:text-green-800 transition" onclick="bookmarkVerse(1, 1)" title="Favorilere Ekle">
                    <i class="fas fa-bookmark text-lg"></i>
                </button>
                <button class="text-blue-600 hover:text-blue-800 transition" onclick="shareVerse('Fatiha', 1, 1)" title="Paylaş">
                    <i class="fas fa-share-alt text-lg"></i>
                </button>
                <button class="text-purple-600 hover:text-purple-800 transition" onclick="goToVerse(1, 1)" title="Tam Sayfaya Git">
                    <i class="fas fa-external-link-alt text-lg"></i>
                </button>
            </div>
        </div>
    `;
    
    if (document.getElementById('dailyVerseCard')) {
        document.getElementById('dailyVerseCard').innerHTML = defaultVerseHtml;
    }
}

// Önbellek sistemi
function cacheDailyVerse(arabicText, turkishText, surahName, surahNumber, ayahNumber) {
    const today = new Date().toDateString();
    const verseData = {
        arabic: arabicText,
        turkish: turkishText,
        surahName: surahName,
        surahNumber: surahNumber,
        ayahNumber: ayahNumber
    };
    
    localStorage.setItem("dailyVerseDate", today);
    localStorage.setItem("dailyVerse", JSON.stringify(verseData));
}

// Cache kontrolü
function getDailyVerseWithCache() {
    const today = new Date().toDateString();
    const cachedDate = localStorage.getItem("dailyVerseDate");
    const cachedVerse = localStorage.getItem("dailyVerse");
    
    if (cachedDate === today && cachedVerse) {
        try {
            const verseData = JSON.parse(cachedVerse);
            updateDailyVerse(verseData.arabic, verseData.turkish, verseData.surahName, verseData.surahNumber, verseData.ayahNumber);
        } catch (e) {
            console.error("Cache parse error:", e);
            getDailyVerse();
        }
    } else {
        getDailyVerse();
    }
}

// Etkileşim fonksiyonları
function bookmarkVerse(surahNumber, ayahNumber) {
    const bookmarkObj = {
        surah: surahNumber.toString(),
        ayat: ayahNumber.toString()
    };
    
    const existingBookmarks = JSON.parse(localStorage.getItem("bookmark") || "[]");
    const isBookmarked = existingBookmarks.some(bookmark => 
        bookmark.surah === bookmarkObj.surah && bookmark.ayat === bookmarkObj.ayat
    );
    
    if (!isBookmarked) {
        existingBookmarks.push(bookmarkObj);
        localStorage.setItem("bookmark", JSON.stringify(existingBookmarks));
        showToast("Ayet favorilere eklendi!", "success");
    } else {
        showToast("Bu ayet zaten favorilerinizde!", "warning");
    }
}

function shareVerse(surahName, surahNumber, ayahNumber) {
    const shareText = `${surahName} Suresi ${surahNumber}:${ayahNumber} - Kuran-ı Kerim`;
    const shareUrl = `${window.location.origin}/surah.html?${surahNumber}#${ayahNumber}`;
    
    if (navigator.share) {
        navigator.share({
            title: shareText,
            url: shareUrl
        });
    } else {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(`${shareText}\n${shareUrl}`).then(() => {
                showToast("Ayet bağlantısı kopyalandı!", "success");
            });
        } else {
            showToast("Paylaşım desteklenmiyor!", "warning");
        }
    }
}

function goToVerse(surahNumber, ayahNumber) {
    window.location.href = `surah.html?${surahNumber}#${ayahNumber}`;
}

function showToast(message, type = "info") {
    const colors = {
        success: "bg-green-500",
        warning: "bg-yellow-500",
        error: "bg-red-500",
        info: "bg-blue-500"
    };
    
    const icons = {
        success: "fa-check-circle",
        warning: "fa-exclamation-triangle",
        error: "fa-times-circle",
        info: "fa-info-circle"
    };
    
    const toastHtml = `
        <div class="toast-notification fixed top-4 right-4 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50">
            <div class="flex items-center">
                <i class="fas ${icons[type]} mr-2"></i>
                <span>${message}</span>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', toastHtml);
    
    setTimeout(() => {
        const toast = document.querySelector('.toast-notification');
        if (toast) {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }
    }, 3000);
}
