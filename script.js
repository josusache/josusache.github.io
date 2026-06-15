const year = document.querySelector("[data-year]");
const projectIndex = document.querySelector("[data-project-index]");
const projectView = document.querySelector(".project-view");
const closeProject = document.querySelector("[data-close-project]");
const seriesGrid = document.querySelector("[data-series-grid]");
const title = document.querySelector("[data-project-title]");
const kind = document.querySelector("[data-project-kind]");
const copy = document.querySelector("[data-project-copy]");
const role = document.querySelector("[data-project-role]");
const format = document.querySelector("[data-project-format]");
const status = document.querySelector("[data-project-status]");

const projectData = {
  memory: {
    title: "Antartica",
    kind: "Short AI Film",
    year: "2026",
    cover: "assets/videos/antartica-loop.webp",
    restartMs: 3200,
    copy:
      "Exploracion de imagen generada, textura documental y montaje para piezas cortas con una estetica entre memoria, archivo y ficcion.",
    role: "Direction, AI workflow, edit",
    format: "Loop film, stills, social cutdowns",
    status: "Personal research",
    images: [
      ["wide", "assets/images/anctartic_1.jpg"],
      ["wide", "assets/images/anctartic_2.jpg"],
      ["wide", "assets/images/anctartic_3.jpg"],
    ],
  },
  avatar: {
    title: "Avatar",
    kind: "AI Film / Digital Double",
    year: "2026",
    cover: "assets/videos/CLAUDIA.webp",
    restartMs: 5000,
    copy: "Exploración de avatar digital y generación de dobles digitales realistas asistidos por inteligencia artificial.",
    role: "Direction, AI workflow",
    format: "Loop film, digital double",
    status: "Personal research",
    images: [],
  },
  worlds: {
    title: "Lethal Storm",
    kind: "Videoclip",
    year: "2026",
    cover: "assets/videos/LETHAL%20STORM.webp",
    restartMs: 5600,
    copy: "Videoclip. (Directed by Acid Thermal)",
    role: "DoP",
    format: "Videoclip",
    status: "Selected work",
    images: [
      ["wide", "assets/images/LETHAL%20STORM_%20(1).jpg"],
      ["wide", "assets/images/LETHAL%20STORM_%20(2).jpg"],
      ["wide", "assets/images/LETHAL%20STORM_%20(3).jpg"],
      ["wide", "assets/images/LETHAL%20STORM_%20(4).jpg"],
      ["wide", "assets/images/LETHAL%20STORM_%20(5).jpg"],
      ["wide", "assets/images/LETHAL%20STORM_%20(6).jpg"],
      ["wide", "assets/images/LETHAL%20STORM_%20(7).jpg"],
    ],
  },
  portraits: {
    title: "Pergo All Night Long",
    kind: "Video Direction",
    year: "2025",
    cover: "assets/videos/PERGO%20ANL.webp",
    restartMs: 3600,
    copy:
      "Serie visual desarrollada desde composicion, textura y una lectura limpia del espacio.",
    role: "Photography, edit",
    format: "Photo series",
    status: "Selected work",
    images: [
      ["wide", "assets/images/PERGO%20ANL_%20(1).jpg"],
      ["wide", "assets/images/PERGO%20ANL_%20(2).jpg"],
      ["wide", "assets/images/PERGO%20ANL_%20(3).jpg"],
      ["wide", "assets/images/PERGO%20ANL_%20(4).jpg"],
      ["wide", "assets/images/PERGO%20ANL_%20(5).jpg"],
      ["wide", "assets/images/PERGO%20ANL_%20(6).jpg"],
      ["wide", "assets/images/PERGO%20ANL_%20(7).jpg"],
    ],
  },
  music: {
    title: "Universo Vendex",
    kind: "Promo Video",
    year: "2025",
    cover: "assets/videos/SHOGUN.webp",
    restartMs: 4800,
    copy:
      "Vendex Universe. Serie visual de agente, tension narrativa y atmosfera cinematografica generada con IA.",
    role: "Direction, Camera Operator & AI Workflow",
    format: "Loop film, video, stills",
    status: "Selected work",
    images: [
      ["wide", "assets/images/AGENTE%20V47_1.7.1.jpg"],
      ["wide", "assets/images/AGENTE%20V47_1.7.2.jpg"],
      ["wide", "assets/images/AGENTE%20V47_1.7.3.jpg"],
      ["wide", "assets/images/AGENTE%20V47_1.7.4.jpg"],
      ["wide", "assets/images/AGENTE%20V47_1.7.5.jpg"],
      ["wide", "assets/images/AGENTE%20V47_1.7.6.jpg"],
      ["wide", "assets/images/SHOGUN%20(1).jpg"],
      ["wide", "assets/images/SHOGUN%20(2).jpg"],
      ["wide", "assets/images/SHOGUN%20(3).jpg"],
      ["wide", "assets/images/SHOGUN%20(4).jpg"],
      ["wide", "assets/images/SHOGUN%20(5).jpg"],
      ["wide", "assets/images/SHOGUN%20(6).jpg"],
      ["wide", "assets/images/SHOGUN%20(7).jpg"],
      ["wide", "assets/images/SHOGUN%20(8).jpg"],
      ["wide", "assets/images/SHOGUN%20(9).jpg"],
    ],
  },
  locations: {
    title: "Generated Locations",
    kind: "AI Preproduction",
    year: "2025",
    cover: "assets/videos/GENERATED%20LOCATIONS.webp",
    restartMs: 6000,
    copy:
      "Localizaciones imaginadas para desbloquear tono, composicion y narrativa antes de rodar con equipo real.",
    role: "Prompting, concept, treatment",
    format: "Generated locations, animatic frames",
    status: "Research archive",
    images: [
      ["wide", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85"],
      ["tall", "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85"],
      ["full", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85"],
      ["wide", "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1400&q=85"],
      ["tall", "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85"],
      ["wide", "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85"],
    ],
  },
  objects: {
    title: "Dojo",
    kind: "Video",
    year: "2024",
    cover: "assets/videos/DOJO.webp",
    restartMs: 3000,
    copy: "Video (Dirigido por Flipnormals)",
    role: "DoP",
    format: "Photo series",
    status: "Selected work",
    images: [
      ["wide", "assets/images/DOJO_%20(1).jpg"],
      ["wide", "assets/images/DOJO_%20(2).jpg"],
      ["wide", "assets/images/DOJO_%20(3).jpg"],
      ["wide", "assets/images/DOJO_%20(4).jpg"],
      ["wide", "assets/images/DOJO_%20(5).jpg"],
      ["wide", "assets/images/DOJO_%20(6).jpg"],
      ["wide", "assets/images/DOJO_%20(7).jpg"],
    ],
  },
  chaosDimensions: {
    title: "Chaos Dimensions",
    kind: "Videoclip",
    year: "2025",
    cover: "assets/videos/CHAOS%20DIMENSIONS.webp",
    restartMs: 2600,
    copy: "Videoclip.",
    role: "Camera Operator",
    format: "Videoclip",
    status: "Selected work",
    images: [
      ["wide", "assets/images/CHAOS%20DIMENSIONS%20(1).jpg"],
      ["wide", "assets/images/CHAOS%20DIMENSIONS%20(2).jpg"],
      ["wide", "assets/images/CHAOS%20DIMENSIONS%20(3).jpg"],
      ["wide", "assets/images/CHAOS%20DIMENSIONS%20(4).jpg"],
      ["wide", "assets/images/CHAOS%20DIMENSIONS%20(5).jpg"],
      ["wide", "assets/images/CHAOS%20DIMENSIONS%20(6).jpg"],
      ["wide", "assets/images/CHAOS%20DIMENSIONS%20(7).jpg"],
      ["wide", "assets/images/CHAOS%20DIMENSIONS%20(8).jpg"],
      ["wide", "assets/images/CHAOS%20DIMENSIONS%20(9).jpg"],
      ["wide", "assets/images/CHAOS%20DIMENSIONS%20(10).jpg"],
    ],
  },
  findMyWay: {
    title: "Find My Way",
    kind: "Videoclip",
    year: "2026",
    cover: "assets/videos/FIND%20MY%20WAY.webp",
    staticCover: "assets/videos/FIND%20MY%20WAY.webp",
    restartMs: 5000,
    copy: "Videoclip. (Directed by Acid Thermal)",
    role: "Filming, DoP",
    format: "Videoclip",
    status: "Selected work",
    images: [
      ["wide", "assets/images/FIND%20MY%20WAY%20(1).jpg"],
      ["wide", "assets/images/FIND%20MY%20WAY%20(2).jpg"],
      ["wide", "assets/images/FIND%20MY%20WAY%20(3).jpg"],
      ["wide", "assets/images/FIND%20MY%20WAY%20(4).jpg"],
      ["wide", "assets/images/FIND%20MY%20WAY%20(5).jpg"],
    ],
  },
  localGeneration: {
    title: "Generación Local",
    kind: "AI Film / Workflow",
    year: "2026",
    cover: "assets/videos/COMFY.webp",
    restartMs: 5000,
    copy: "Exploración técnica y generación de imagen en local basada en herramientas nodales, optimizando el workflow de ComfyUI.",
    role: "Direction, AI workflow",
    format: "Loop film, workflow development",
    status: "Personal research",
    images: [],
  },
  kanojoNo: {
    title: "Kanojo No",
    kind: "Video art",
    year: "2026",
    cover: "assets/videos/Kanojo%20No.webp",
    restartMs: 5000,
    copy: "Creación para narrar visualmente la creación de una pieza musical.",
    role: "Filming, Editing",
    format: "Video art",
    status: "Selected work",
    images: [],
  },
};

year.textContent = new Date().getFullYear();

// Intersection Observer to lazy-load covers only when in viewport
const observerOptions = {
  root: null, // viewport
  rootMargin: "0px 200px 0px 200px", // Preload cards 200px before they enter the viewport
  threshold: 0.01
};

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const card = entry.target;
    const img = card.querySelector(".loop-image img");
    if (!img) return;

    if (entry.isIntersecting) {
      card.dataset.visible = "true";
      // Load either animated (if hovered) or static frame
      if (card.dataset.hovered === "true") {
        img.src = img.dataset.animated;
      } else {
        img.src = img.dataset.static;
      }
    } else {
      card.dataset.visible = "false";
      img.classList.remove("loaded");
      img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    }
  });
}, observerOptions);

const renderProjectIndex = () => {
  Object.entries(projectData).forEach(([id, data]) => {
    const card = document.createElement("article");
    const link = document.createElement("a");
    const frame = document.createElement("span");
    const image = document.createElement("img");
    const meta = document.createElement("span");
    const projectTitle = document.createElement("strong");
    const projectInfo = document.createElement("small");

    card.className = "project-card";
    card.dataset.project = id;
    card.dataset.visible = "false";
    card.dataset.hovered = "false";
    
    link.className = "project-link";
    link.href = "#project";
    frame.className = "loop-image";
    
    // Calculate static path from cover path
    const coverUrl = data.cover;
    const parts = coverUrl.split('/');
    const filename = parts[parts.length - 1];
    const staticUrl = data.staticCover || `assets/videos/static/${filename}`;

    // Store animation and static URLs
    image.dataset.animated = coverUrl;
    image.dataset.static = staticUrl;
    image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    image.alt = data.title;
    
    image.addEventListener("load", () => {
      if (image.src !== "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7") {
        image.classList.add("loaded");
      }
    });

    // Hover listeners to swap source between static and animated cover
    card.addEventListener("mouseenter", () => {
      card.dataset.hovered = "true";
      if (image.dataset.animated && card.dataset.visible === "true") {
        image.src = image.dataset.animated;
      }
    });

    card.addEventListener("mouseleave", () => {
      card.dataset.hovered = "false";
      if (card.dataset.visible === "true") {
        image.src = image.dataset.static;
      }
    });

    meta.className = "project-meta";
    projectTitle.textContent = data.title;
    projectInfo.textContent = data.kind;

    frame.append(image);
    meta.append(projectTitle, projectInfo);
    link.append(frame, meta);
    card.append(link);
    projectIndex.append(card);
    
    // Observe the card for visibility
    cardObserver.observe(card);
  });
};

const createProjectNodeLayer = () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const nodeColors = ["#111111", "#4b4b4b", "#777777", "#9a9a9a"];
  const bridgeLabels = ["Briefing", "Script", "Pre-production", "Filming", "Editing", "Backup", "Sound Design", "Export"];
  let rafId = null;
  let startedAt = 0;

  canvas.className = "project-node-canvas";
  canvas.setAttribute("aria-hidden", "true");
  projectIndex.prepend(canvas);

  const getLayerSize = () => {
    const indexRect = projectIndex.getBoundingClientRect();
    const styles = getComputedStyle(projectIndex);
    const paddingRight = parseFloat(styles.paddingRight) || 0;
    const paddingBottom = parseFloat(styles.paddingBottom) || 0;
    const cards = [...projectIndex.querySelectorAll(".project-card")];
    let maxRight = projectIndex.clientWidth;
    let maxBottom = projectIndex.clientHeight;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      maxRight = Math.max(maxRight, rect.right - indexRect.left + projectIndex.scrollLeft);
      maxBottom = Math.max(maxBottom, rect.bottom - indexRect.top + projectIndex.scrollTop);
    });

    return {
      height: Math.ceil(maxBottom + paddingBottom),
      width: Math.ceil(maxRight + paddingRight),
    };
  };

  const syncCanvasSize = () => {
    const { width, height } = getLayerSize();
    const ratio = window.devicePixelRatio || 1;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
    }

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const getCardBox = (card) => {
    const frame = card.querySelector(".loop-image");
    const indexRect = projectIndex.getBoundingClientRect();
    const rect = (frame || card).getBoundingClientRect();
    const x = rect.left - indexRect.left + projectIndex.scrollLeft;
    const y = rect.top - indexRect.top + projectIndex.scrollTop;

    return {
      bottom: y + rect.height,
      centerX: x + rect.width * 0.5,
      centerY: y + rect.height * 0.5,
      height: rect.height,
      left: x,
      right: x + rect.width,
      top: y,
      width: rect.width,
    };
  };

  const getConnection = (card, nextCard) => {
    const fromBox = getCardBox(card);
    const toBox = getCardBox(nextCard);
    const sameRow = Math.abs(fromBox.centerY - toBox.centerY) < Math.min(fromBox.height, toBox.height) * 0.55;
    const horizontalGap = toBox.left - fromBox.right;
    const layout = sameRow && horizontalGap > 0 ? "horizontal" : "vertical";

    if (layout === "horizontal") {
      return {
        from: { x: fromBox.right, y: fromBox.centerY },
        to: { x: toBox.left, y: toBox.centerY },
        layout,
      };
    }

    return {
      from: { x: fromBox.centerX, y: fromBox.bottom },
      to: { x: toBox.centerX, y: toBox.top },
      layout,
    };
  };

  const drawPort = (point, color, active) => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, active ? 12 : 9, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.globalAlpha = active ? 0.16 : 0.1;
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.beginPath();
    ctx.arc(point.x, point.y, active ? 5.4 : 4.5, 0, Math.PI * 2);
    ctx.fillStyle = active ? color : color;
    ctx.globalAlpha = active ? 1 : 0.9;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.arc(point.x, point.y, active ? 10 : 8, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.globalAlpha = active ? 0.48 : 0.32;
    ctx.lineWidth = 1.2;
    ctx.stroke();
    ctx.globalAlpha = 1;
  };

  const bezierPoint = (from, cp1, cp2, to, t) => {
    const mt = 1 - t;
    return {
      x: mt * mt * mt * from.x + 3 * mt * mt * t * cp1.x + 3 * mt * t * t * cp2.x + t * t * t * to.x,
      y: mt * mt * mt * from.y + 3 * mt * mt * t * cp1.y + 3 * mt * t * t * cp2.y + t * t * t * to.y,
    };
  };

  const drawRoundedRect = (x, y, width, height, radius) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  };

  const drawBridgeNode = (point, color, label, active, widthLimit, heightLimit) => {
    const compact = window.innerWidth <= 540;
    const fontSize = compact ? 9 : 10;
    const paddingX = compact ? 18 : 24;
    const minWidth = compact ? 58 : 68;
    const width = Math.max(minWidth, label.length * (compact ? 6.7 : 8) + paddingX);
    const height = compact ? 26 : 30;
    const x = Math.min(Math.max(point.x - width * 0.5, 4), Math.max(4, widthLimit - width - 4));
    const y = Math.min(Math.max(point.y - height * 0.5, 4), Math.max(4, heightLimit - height - 4));
    const dotX = x + (compact ? 10 : 12);
    const textX = x + (compact ? 18 : 22);
    const textY = y + height * 0.5;

    drawRoundedRect(x, y, width, height, 6);
    ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
    ctx.fill();

    drawRoundedRect(x, y, width, height, 6);
    ctx.strokeStyle = color;
    ctx.globalAlpha = active ? 0.72 : 0.48;
    ctx.lineWidth = active ? 1.4 : 1;
    ctx.stroke();
    ctx.globalAlpha = 1;

    ctx.beginPath();
    ctx.arc(dotX, textY, active ? 3.8 : 3.2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.globalAlpha = active ? 1 : 0.82;
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.font = `700 ${fontSize}px Arial, Helvetica, sans-serif`;
    ctx.fillStyle = active ? "rgba(17, 17, 17, 0.78)" : "rgba(17, 17, 17, 0.54)";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(label, textX, textY + 0.5);
    ctx.textBaseline = "alphabetic";
  };

  const drawWire = (connection, index, time, active, widthLimit, heightLimit) => {
    const { from, to, layout } = connection;
    const color = nodeColors[index % nodeColors.length];
    const horizontal = layout === "horizontal";
    const distance = horizontal ? Math.max(54, Math.abs(to.x - from.x) * 0.45) : Math.max(62, Math.abs(to.y - from.y) * 0.36);
    const cp1 = horizontal ? { x: from.x + distance, y: from.y } : { x: from.x, y: from.y + distance };
    const cp2 = horizontal ? { x: to.x - distance, y: to.y } : { x: to.x, y: to.y - distance };
    const pulse = (time * 0.00016 + index * 0.14) % 1;
    const marker = bezierPoint(from, cp1, cp2, to, pulse);
    const bridge = bezierPoint(from, cp1, cp2, to, 0.5);

    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, to.x, to.y);
    ctx.strokeStyle = color;
    ctx.globalAlpha = active ? 0.64 : 0.38;
    ctx.lineWidth = active ? 2.2 : 1.55;
    ctx.stroke();
    ctx.globalAlpha = 1;

    drawBridgeNode(bridge, color, bridgeLabels[index % bridgeLabels.length], active, widthLimit, heightLimit);

    ctx.beginPath();
    ctx.arc(marker.x, marker.y, active ? 8 : 6, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.globalAlpha = active ? 0.16 : 0.1;
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.beginPath();
    ctx.arc(marker.x, marker.y, active ? 4 : 3.2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.globalAlpha = active ? 1 : 0.94;
    ctx.fill();
    ctx.globalAlpha = 1;

    drawPort(from, color, active);
    drawPort(to, color, active);
  };

  const draw = (time = 0) => {
    if (!startedAt) startedAt = time;
    syncCanvasSize();

    const { width, height } = getLayerSize();
    const cards = [...projectIndex.querySelectorAll(".project-card")];

    ctx.clearRect(0, 0, width, height);

    cards.forEach((card, index) => {
      const nextCard = cards[index + 1];
      if (!nextCard) return;

      const active = card.matches(":hover, :focus-within") || nextCard.matches(":hover, :focus-within");
      const connection = getConnection(card, nextCard);
      drawWire(connection, index, time - startedAt, active, width, height);
    });

    rafId = requestAnimationFrame(draw);
  };

  const resizeObserver = new ResizeObserver(() => {
    syncCanvasSize();
  });

  resizeObserver.observe(projectIndex);
  requestAnimationFrame(draw);
};

const renderSeries = (items) => {
  seriesGrid.replaceChildren();

  items.forEach(([size, src], index) => {
    const frame = document.createElement("figure");
    const image = document.createElement("img");

    frame.className = `series-item ${size}`;
    image.src = src;
    image.alt = `Imagen ${index + 1} de la serie`;
    frame.append(image);
    seriesGrid.append(frame);
  });
};

const openProject = (card) => {
  const data = projectData[card.dataset.project];

  title.textContent = data.title;
  kind.textContent = data.kind;
  copy.textContent = data.copy;
  role.textContent = data.role;
  format.textContent = data.format;
  status.textContent = data.status;
  renderSeries(data.images);
  projectView.classList.add("is-open");
  projectView.scrollTop = 0;
};

renderProjectIndex();
createProjectNodeLayer();

document.querySelectorAll(".project-card").forEach((card) => {
  card.querySelector(".project-link").addEventListener("click", (event) => {
    event.preventDefault();
    openProject(card);
  });
});

closeProject.addEventListener("click", () => {
  projectView.classList.remove("is-open");
});

// Smooth inertia horizontal scrolling on desktop
let targetScrollLeft = projectIndex.scrollLeft;
let currentScrollLeft = projectIndex.scrollLeft;
const ease = 0.08;
let animationFrameId = null;

const smoothScroll = () => {
  currentScrollLeft += (targetScrollLeft - currentScrollLeft) * ease;
  projectIndex.scrollLeft = currentScrollLeft;

  if (Math.abs(targetScrollLeft - currentScrollLeft) > 0.5) {
    animationFrameId = requestAnimationFrame(smoothScroll);
  } else {
    projectIndex.scrollLeft = targetScrollLeft;
    currentScrollLeft = targetScrollLeft;
    animationFrameId = null;
  }
};

projectIndex.addEventListener("wheel", (event) => {
  if (window.innerWidth > 860) {
    if (event.deltaY !== 0) {
      event.preventDefault();
      
      const speedMultiplier = 2.4; // Multiplier to increase scrolling speed and distance
      targetScrollLeft += event.deltaY * speedMultiplier;
      
      const maxScroll = projectIndex.scrollWidth - projectIndex.clientWidth;
      targetScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScroll));
      
      if (animationFrameId === null) {
        currentScrollLeft = projectIndex.scrollLeft;
        animationFrameId = requestAnimationFrame(smoothScroll);
      }
    }
  }
}, { passive: false });

// Keep target scroll synced if scroll is updated outside wheel (e.g. keyboard/resize)
projectIndex.addEventListener("scroll", () => {
  if (animationFrameId === null) {
    targetScrollLeft = projectIndex.scrollLeft;
    currentScrollLeft = projectIndex.scrollLeft;
  }
});

// Scroll arrows navigation logic (slides horizontal carrusel using smooth scroll loop)
const scrollLeftBtn = document.querySelector(".scroll-left");
const scrollRightBtn = document.querySelector(".scroll-right");

scrollLeftBtn.addEventListener("click", () => {
  const scrollAmount = Math.max(300, window.innerWidth * 0.45);
  targetScrollLeft -= scrollAmount;
  targetScrollLeft = Math.max(0, targetScrollLeft);
  
  if (animationFrameId === null) {
    currentScrollLeft = projectIndex.scrollLeft;
    animationFrameId = requestAnimationFrame(smoothScroll);
  }
});

scrollRightBtn.addEventListener("click", () => {
  const scrollAmount = Math.max(300, window.innerWidth * 0.45);
  const maxScroll = projectIndex.scrollWidth - projectIndex.clientWidth;
  targetScrollLeft += scrollAmount;
  targetScrollLeft = Math.min(targetScrollLeft, maxScroll);
  
  if (animationFrameId === null) {
    currentScrollLeft = projectIndex.scrollLeft;
    animationFrameId = requestAnimationFrame(smoothScroll);
  }
});

// Navigation & Info Overlay Logic
const infoSection = document.querySelector(".info-section");
const projectsLink = document.querySelector('.site-nav a[href="#projects"]');
const infoLink = document.querySelector('.site-nav a[href="#info"]');
const brandLink = document.querySelector(".brand");

infoLink.addEventListener("click", (event) => {
  event.preventDefault();
  projectView.classList.remove("is-open");
  infoSection.classList.add("is-open");
});

const closeAllOverlays = (event) => {
  event.preventDefault();
  projectView.classList.remove("is-open");
  infoSection.classList.remove("is-open");
};

projectsLink.addEventListener("click", closeAllOverlays);
brandLink.addEventListener("click", closeAllOverlays);
