// AUTO-GENERATED from swallow.raw.js by scripts/p5-transform.mjs — do not edit by hand.
// Source template: p5-animation skill (CC BY-NC 4.0, xxoogreymon).
/* eslint-disable */
export function makeSwallow(container) {
  return function ($p) {
    // ---- p5 instance-mode aliases (auto-injected) ----
    const createCanvas = $p.createCanvas.bind($p);
    const resizeCanvas = $p.resizeCanvas.bind($p);
    const background = $p.background.bind($p);
    const clear = $p.clear.bind($p);
    const pixelDensity = $p.pixelDensity.bind($p);
    const random = $p.random.bind($p);
    const lerp = $p.lerp.bind($p);
    const constrain = $p.constrain.bind($p);
    const map = $p.map.bind($p);
    const dist = $p.dist.bind($p);
    const color = $p.color.bind($p);
    const red = $p.red.bind($p);
    const green = $p.green.bind($p);
    const blue = $p.blue.bind($p);
    const createVector = $p.createVector.bind($p);
    const createImage = $p.createImage.bind($p);
    const radians = $p.radians.bind($p);
    const degrees = $p.degrees.bind($p);
    const millis = $p.millis.bind($p);
    const fill = $p.fill.bind($p);
    const noFill = $p.noFill.bind($p);
    const stroke = $p.stroke.bind($p);
    const noStroke = $p.noStroke.bind($p);
    const strokeWeight = $p.strokeWeight.bind($p);
    const strokeCap = $p.strokeCap.bind($p);
    const strokeJoin = $p.strokeJoin.bind($p);
    const line = $p.line.bind($p);
    const ellipse = $p.ellipse.bind($p);
    const push = $p.push.bind($p);
    const pop = $p.pop.bind($p);
    const translate = $p.translate.bind($p);
    const rotate = $p.rotate.bind($p);
    const scale = $p.scale.bind($p);
    const beginShape = $p.beginShape.bind($p);
    const endShape = $p.endShape.bind($p);
    const vertex = $p.vertex.bind($p);
    const image = $p.image.bind($p);
    const imageMode = $p.imageMode.bind($p);
    const text = $p.text.bind($p);
    const textAlign = $p.textAlign.bind($p);
    const textSize = $p.textSize.bind($p);
    const tint = $p.tint.bind($p);
    const noTint = $p.noTint.bind($p);
    const sin = Math.sin, cos = Math.cos, tan = Math.tan, sqrt = Math.sqrt, pow = Math.pow, abs = Math.abs, floor = Math.floor, ceil = Math.ceil, round = Math.round, min = Math.min, max = Math.max, atan2 = Math.atan2;
    const PI = Math.PI;
    const TWO_PI = (Math.PI*2);
    const HALF_PI = (Math.PI/2);
    const QUARTER_PI = (Math.PI/4);
    const CENTER = $p.CENTER;
    const CORNER = $p.CORNER;
    const CORNERS = $p.CORNERS;
    const LEFT = $p.LEFT;
    const RIGHT = $p.RIGHT;
    const TOP = $p.TOP;
    const BOTTOM = $p.BOTTOM;
    const ROUND = $p.ROUND;
    const CLOSE = $p.CLOSE;
    const RADIUS = $p.RADIUS;

// ============================================================
//  Swallow Flock — 一群飞燕飞过
// ============================================================

// ============================================================
//  ██  画布  ██
// ============================================================
const CANVAS_W = container.clientWidth;
const CANVAS_H = container.clientHeight;
const BG_COLOR   = 'rgba(0,0,0,0)';

// ============================================================
//  ██  飞燕素材 CDN 地址  ██
// ============================================================
const BIRD_BODY_URL = 'https://cdn.jsdelivr.net/gh/xxoogreymon-prog/image-resources@main/icons/bird/bird_body.svg';
const BIRD_WING_L_URL = 'https://cdn.jsdelivr.net/gh/xxoogreymon-prog/image-resources@main/icons/bird/bird_wing_l.svg';
const BIRD_WING_R_URL = 'https://cdn.jsdelivr.net/gh/xxoogreymon-prog/image-resources@main/icons/bird/bird_wing_r.svg';

// ============================================================
//  ██  素材显式像素尺寸  ██
// ============================================================
const BIRD_BODY_W = 17;
const BIRD_BODY_H = 69;
const BIRD_WING_W = 66;
const BIRD_WING_H = 28;

// ============================================================
//  ██  群集 / 交互参数 (Boids + cursor)  ██
// ============================================================

// -- 群内数量 --
const FLOCK_SIZE = 7;

// -- 速度限制 --
const MAX_SPEED = 3.2;
const MIN_SPEED = 1.4;
const MAX_FORCE = 0.09;

// -- 三大群集规则的感知半径 --
const PERCEPTION_ALIGN  = 70;
const PERCEPTION_COHERE = 90;
const PERCEPTION_SEPARATE = 34;

// -- 群集规则权重 --
// 不再强制聚拢:cohesion 归零、alignment 弱化,只保留 separation 防重叠。
// 燕子各飞各的、偶尔擦身,不会挤成一团。
const WEIGHT_ALIGN    = 0.25;
const WEIGHT_COHERE   = 0.0;
const WEIGHT_SEPARATE = 1.1;

// -- 光标斥力 (惊扰) --
const CURSOR_RADIUS = 150;
const CURSOR_FORCE  = 1.8;

// -- 出框环绕:飞出画面多远后从另一侧折返(要大于飞燕自身尺寸,才在屏外完成) --
const EDGE_WRAP = 120;

// -- 转向平滑系数 (0..1,越小越顺滑) --
const HEADING_EASE = 0.18;

// -- 游荡:让各自飞出自然的曲线路径,而非直线 --
const WANDER_STRENGTH = 0.05;
const WANDER_JITTER   = 0.3;

// -- 入场淡入时长 (ms) --
const FADE_IN_MS = 600;

// ============================================================
//  ██  飞燕外观参数  ██
// ============================================================
const BIRD_SCALE         = 0.62;
const BIRD_SCALE_JITTER  = 0.20;
const WING_FLAP_SPEED    = 0.22;
const WING_SCALE_MIN     = 0.20;
const BIRD_COLOR         = '#1F1D1A';

// ============================================================
//  ██  叉尾参数（Verlet 物理）  ██
// ============================================================
const TAIL_COLOR           = '#1F1D1A';
const TAIL_HALF_W          = 0.5;
const TAIL_PARTICLE_COUNT  = 8;   // was 12 — lighter Verlet solve, same look at this scale
const TAIL_TOTAL_LEN       = 90;
const TAIL_SPREAD_ANGLE    = 8;
const TAIL_DAMPING         = 0.94;
const TAIL_CONSTRAINT_ITERS = 3;  // was 5 — fewer iterations, still stable
const TAIL_ROOT_TRANSFER   = 0.3;

// ============================================================
//  全局状态
// ============================================================
let birdImages   = { body: null, wingL: null, wingR: null };
let swallows     = [];
let _birdImgsReady = false;
let _birdR = 0, _birdG = 0, _birdB = 0;

// ============================================================
//  加载飞燕素材
// ============================================================
async function loadBirdImages() {
  async function loadSVG(url, targetW, targetH) {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error('Fetch failed: ' + url);
    const svgText = await resp.text();

    const blob = new Blob([svgText], { type: 'image/svg+xml' });
    const blobUrl = URL.createObjectURL(blob);

    const native = await new Promise((resolve, reject) => {
      const img = new Image();
      img.onload  = () => resolve(img);
      img.onerror = () => reject(new Error('Decode failed: ' + url));
      img.src = blobUrl;
    });
    URL.revokeObjectURL(blobUrl);

    const p5img = createImage(targetW, targetH);
    p5img.drawingContext.drawImage(native, 0, 0, targetW, targetH);
    return p5img;
  }

  const [bodyImg, wingL, wingR] = await Promise.all([
    loadSVG(BIRD_BODY_URL,   BIRD_BODY_W, BIRD_BODY_H),
    loadSVG(BIRD_WING_L_URL, BIRD_WING_W, BIRD_WING_H),
    loadSVG(BIRD_WING_R_URL, BIRD_WING_W, BIRD_WING_H),
  ]);

  birdImages = { body: bodyImg, wingL: wingL, wingR: wingR };
}

// ============================================================
//  SwallowBird — 单只飞燕
// ============================================================
class SwallowBird {
  constructor(index, total) {
    // Spawn somewhere inside the canvas with a random initial heading.
    this.x = random(0, CANVAS_W);
    this.y = random(0, CANVAS_H);
    const ang = random(TWO_PI);
    const sp = random(MIN_SPEED, MAX_SPEED);
    this.vx = cos(ang) * sp;
    this.vy = sin(ang) * sp;
    this.ax = 0;
    this.ay = 0;

    // Smoothed render heading (eased toward velocity direction each frame).
    this.heading = atan2(this.vx, -this.vy);

    // Independent wander phase so each bird curves on its own.
    this.wanderAngle = random(TWO_PI);

    this.prevX  = this.x;
    this.prevY  = this.y;

    // Stagger the fade-in so the flock materialises gracefully.
    this.startDelay = (index / max(total, 1)) * FADE_IN_MS;
    this.birthTime  = 0;
    this.opacity    = 0;
    this.done       = false;

    this.wingPhase = random(TWO_PI);
    this.wingTime  = random(TWO_PI);

    this.scale = BIRD_SCALE * random(
      1 - BIRD_SCALE_JITTER,
      1 + BIRD_SCALE_JITTER,
    );

    this._bodyW = BIRD_BODY_W;
    this._bodyH = BIRD_BODY_H;
    this._wingLW = BIRD_WING_W;
    this._wingLH = BIRD_WING_H;
    this._wingRW = BIRD_WING_W;
    this._wingRH = BIRD_WING_H;

    this._anchorWingLX = 0;
    this._anchorWingLY = 0;
    this._anchorWingRX = 68;
    this._anchorWingRY = 0;
    this._anchorBodyX  = 58;
    this._anchorBodyY  = -14.5;
    this._anchorTailX  = 67;
    this._anchorTailY  = 54;

    this._centerX = null;
    this._centerY = null;

    this._tailL = [];
    this._tailR = [];
    this._initTail();
  }

  _initTail() {
    const N = TAIL_PARTICLE_COUNT;
    const segLen = TAIL_TOTAL_LEN / (N - 1);
    const ax = this._anchorTailX;
    const ay = this._anchorTailY;
    const spreadRad = radians(TAIL_SPREAD_ANGLE);
    const forkAngL = PI / 2 + spreadRad;
    const forkAngR = PI / 2 - spreadRad;

    for (let i = 0; i < N; i++) {
      const d = i * segLen;
      this._tailL.push({
        x: ax + cos(forkAngL) * d, y: ay + sin(forkAngL) * d,
        px: ax + cos(forkAngL) * d, py: ay + sin(forkAngL) * d,
      });
      this._tailR.push({
        x: ax + cos(forkAngR) * d, y: ay + sin(forkAngR) * d,
        px: ax + cos(forkAngR) * d, py: ay + sin(forkAngR) * d,
      });
    }
  }

  _updateTail() {
    const N = TAIL_PARTICLE_COUNT;
    const segLen = TAIL_TOTAL_LEN / (N - 1);
    const damp = TAIL_DAMPING;
    const transfer = TAIL_ROOT_TRANSFER;
    const iters = TAIL_CONSTRAINT_ITERS;
    const ax = this._anchorTailX;
    const ay = this._anchorTailY;

    for (const fork of [this._tailL, this._tailR]) {
      const rootPrevX = fork[0].x;
      const rootPrevY = fork[0].y;
      fork[0].px = fork[0].x;
      fork[0].py = fork[0].y;
      fork[0].x = ax;
      fork[0].y = ay;
      const rootDx = fork[0].x - rootPrevX;
      const rootDy = fork[0].y - rootPrevY;

      for (let i = 1; i < N; i++) {
        const p = fork[i];
        const vx = (p.x - p.px) * damp;
        const vy = (p.y - p.py) * damp;
        p.px = p.x;
        p.py = p.y;
        p.x += vx + rootDx * transfer;
        p.y += vy + rootDy * transfer;
      }

      for (let iter = 0; iter < iters; iter++) {
        for (let i = 0; i < N - 1; i++) {
          const a = fork[i], b = fork[i + 1];
          let dx = b.x - a.x, dy = b.y - a.y;
          const d = sqrt(dx * dx + dy * dy) || 0.001;
          const corr = (d - segLen) / d * 0.5;
          if (i > 0)     { a.x += dx * corr; a.y += dy * corr; }
          if (i < N - 2) { b.x -= dx * corr; b.y -= dy * corr; }
        }
      }
    }
  }

  _calcCenter() {
    const bW = this._bodyW, bH = this._bodyH;
    const lW = this._wingLW, lH = this._wingLH;
    const rW = this._wingRW, rH = this._wingRH;

    const minX = min(this._anchorWingLX, this._anchorWingRX, this._anchorBodyX);
    const maxX = max(this._anchorWingLX + lW, this._anchorWingRX + rW, this._anchorBodyX + bW);
    const minY = min(this._anchorWingLY, this._anchorWingRY, this._anchorBodyY);
    const maxY = max(this._anchorWingLY + lH, this._anchorWingRY + rH, this._anchorBodyY + bH);

    this._centerX = (minX + maxX) / 2;
    this._centerY = (minY + maxY) / 2;
  }

  // Boids steering: alignment + cohesion + separation, plus cursor repulsion
  // and a gentle pull back toward center so the flock never fully escapes.
  update(flock, mx, my, hasMouse) {
    const elapsed = millis() - this.birthTime - this.startDelay;
    this.opacity = elapsed < 0 ? 0 : constrain(map(elapsed, 0, FADE_IN_MS, 0, 255), 0, 255);

    let alignX = 0, alignY = 0, alignN = 0;
    let cohX = 0, cohY = 0, cohN = 0;
    let sepX = 0, sepY = 0;

    for (const other of flock) {
      if (other === this) continue;
      const dx = other.x - this.x;
      const dy = other.y - this.y;
      const d = sqrt(dx * dx + dy * dy);
      if (d < 0.0001) continue;
      if (d < PERCEPTION_ALIGN)  { alignX += other.vx; alignY += other.vy; alignN++; }
      if (d < PERCEPTION_COHERE) { cohX += other.x; cohY += other.y; cohN++; }
      if (d < PERCEPTION_SEPARATE) { sepX -= dx / d; sepY -= dy / d; }
    }

    this.ax = 0; this.ay = 0;

    if (alignN > 0) {
      const s = this._steer(alignX / alignN, alignY / alignN);
      this.ax += s.x * WEIGHT_ALIGN; this.ay += s.y * WEIGHT_ALIGN;
    }
    if (cohN > 0) {
      const s = this._steer((cohX / cohN) - this.x, (cohY / cohN) - this.y);
      this.ax += s.x * WEIGHT_COHERE; this.ay += s.y * WEIGHT_COHERE;
    }
    if (sepX !== 0 || sepY !== 0) {
      const s = this._steer(sepX, sepY);
      this.ax += s.x * WEIGHT_SEPARATE; this.ay += s.y * WEIGHT_SEPARATE;
    }

    // Wander: each bird meanders on its own slowly-drifting heading, so with
    // cohesion off they still trace natural curving paths rather than straight
    // lines. The wander angle random-walks a little each frame.
    this.wanderAngle += random(-WANDER_JITTER, WANDER_JITTER);
    this.ax += cos(this.wanderAngle) * WANDER_STRENGTH;
    this.ay += sin(this.wanderAngle) * WANDER_STRENGTH;

    // Cursor repulsion — the "startled" reaction.
    if (hasMouse) {
      const dx = this.x - mx, dy = this.y - my;
      const d = sqrt(dx * dx + dy * dy);
      if (d < CURSOR_RADIUS && d > 0.0001) {
        const push = (1 - d / CURSOR_RADIUS) * CURSOR_FORCE;
        this.ax += (dx / d) * push;
        this.ay += (dy / d) * push;
      }
    }

    this.vx += this.ax;
    this.vy += this.ay;

    // Clamp speed into [MIN_SPEED, MAX_SPEED].
    let sp = sqrt(this.vx * this.vx + this.vy * this.vy) || 0.0001;
    const clamped = constrain(sp, MIN_SPEED, MAX_SPEED);
    this.vx = (this.vx / sp) * clamped;
    this.vy = (this.vy / sp) * clamped;

    this.prevX = this.x;
    this.prevY = this.y;
    this.x += this.vx;
    this.y += this.vy;

    // Free flight: birds may leave the frame, then wrap back in from the
    // opposite side. The margin (EDGE_WRAP) is larger than a bird's on-screen
    // size, so the wrap happens fully off-screen and reads as seamless.
    const M = EDGE_WRAP;
    if (this.x < -M)              this.x = CANVAS_W + M;
    else if (this.x > CANVAS_W + M) this.x = -M;
    if (this.y < -M)              this.y = CANVAS_H + M;
    else if (this.y > CANVAS_H + M) this.y = -M;

    this.wingTime += WING_FLAP_SPEED;
    this._updateTail();
  }

  // Reynolds steering: desired (at max speed) minus current velocity, force-capped.
  _steer(dx, dy) {
    const d = sqrt(dx * dx + dy * dy) || 0.0001;
    let desiredX = (dx / d) * MAX_SPEED;
    let desiredY = (dy / d) * MAX_SPEED;
    let steerX = desiredX - this.vx;
    let steerY = desiredY - this.vy;
    const sm = sqrt(steerX * steerX + steerY * steerY) || 0.0001;
    if (sm > MAX_FORCE) { steerX = (steerX / sm) * MAX_FORCE; steerY = (steerY / sm) * MAX_FORCE; }
    return { x: steerX, y: steerY };
  }

  display() {
    if (this.opacity <= 0 || this.done) return;
    if (!birdImages.body || !birdImages.wingL || !birdImages.wingR) return;

    if (this._centerX === null) this._calcCenter();

    push();
    translate(this.x, this.y);

    // Ease the render heading toward the velocity direction so turns bank
    // smoothly instead of snapping (handles the -PI/+PI wraparound).
    const targetAngle = atan2(this.vx, -this.vy);
    let da = targetAngle - this.heading;
    while (da > PI) da -= TWO_PI;
    while (da < -PI) da += TWO_PI;
    this.heading += da * HEADING_EASE;
    rotate(this.heading);

    translate(-this._centerX, -this._centerY);
    scale(this.scale);

    const flapT = (sin(this.wingTime + this.wingPhase) + 1) / 2;
    const wingSX = lerp(WING_SCALE_MIN, 1.0, flapT);

    // 右翅
    push();
    translate(this._anchorWingRX, this._anchorWingRY);
    scale(wingSX, 1);
    tint(_birdR, _birdG, _birdB, this.opacity);
    image(birdImages.wingR, 0, 0);
    noTint();
    pop();

    // 左翅
    push();
    translate(this._anchorWingLX + this._wingLW, this._anchorWingLY);
    scale(wingSX, 1);
    tint(_birdR, _birdG, _birdB, this.opacity);
    image(birdImages.wingL, -this._wingLW, 0);
    noTint();
    pop();

    // 身体
    push();
    translate(this._anchorBodyX, this._anchorBodyY);
    tint(_birdR, _birdG, _birdB, this.opacity);
    image(birdImages.body, 0, 0);
    noTint();
    pop();

    // ---- Verlet 叉尾 ----
    const tc = color(TAIL_COLOR);
    noStroke();
    for (const fork of [this._tailL, this._tailR]) {
      const N = fork.length;

      const normals = [];
      for (let i = 0; i < N; i++) {
        let nx = 0, ny = 0;
        if (i > 0) {
          let dx = fork[i].x - fork[i - 1].x, dy = fork[i].y - fork[i - 1].y;
          const d = sqrt(dx * dx + dy * dy) || 1;
          nx += -dy / d; ny += dx / d;
        }
        if (i < N - 1) {
          let dx = fork[i + 1].x - fork[i].x, dy = fork[i + 1].y - fork[i].y;
          const d = sqrt(dx * dx + dy * dy) || 1;
          nx += -dy / d; ny += dx / d;
        }
        const nl = sqrt(nx * nx + ny * ny) || 1;
        normals.push({ x: nx / nl * TAIL_HALF_W, y: ny / nl * TAIL_HALF_W });
      }

      for (let i = 0; i < N - 1; i++) {
        const a1 = this.opacity * (1 - i / (N - 1));
        const a2 = this.opacity * (1 - (i + 1) / (N - 1));
        const p1 = fork[i], n1 = normals[i];
        const p2 = fork[i + 1], n2 = normals[i + 1];

        fill(red(tc), green(tc), blue(tc), a1);
        beginShape();
        vertex(p1.x + n1.x, p1.y + n1.y);
        vertex(p1.x - n1.x, p1.y - n1.y);
        fill(red(tc), green(tc), blue(tc), a2);
        vertex(p2.x - n2.x, p2.y - n2.y);
        vertex(p2.x + n2.x, p2.y + n2.y);
        endShape(CLOSE);
      }
    }

    pop();
  }
}

// ============================================================
//  生成一群飞燕 (持续在场)
// ============================================================
function spawnFlock() {
  swallows = [];
  const birth = millis();
  for (let i = 0; i < FLOCK_SIZE; i++) {
    const b = new SwallowBird(i, FLOCK_SIZE);
    b.birthTime = birth;
    swallows.push(b);
  }
}

// ============================================================
//  p5 生命周期
// ============================================================
async function setup() {
  createCanvas(container.clientWidth, container.clientHeight);

  const hex = BIRD_COLOR.replace('#', '');
  _birdR = parseInt(hex.substring(0, 2), 16);
  _birdG = parseInt(hex.substring(2, 4), 16);
  _birdB = parseInt(hex.substring(4, 6), 16);

  try {
    await loadBirdImages();
    _birdImgsReady = true;
  } catch (e) {
  }
}

function draw() {
  $p.clear();

  if (!_birdImgsReady) return;
  if (swallows.length === 0) spawnFlock();

  // Cursor is "active" only while it's over the canvas.
  const mx = $p.mouseX, my = $p.mouseY;
  const hasMouse = mx >= 0 && mx <= CANVAS_W && my >= 0 && my <= CANVAS_H;

  for (const b of swallows) b.update(swallows, mx, my, hasMouse);
  for (const b of swallows) b.display();
}


    $p.setup = setup;
    $p.draw = draw;
    $p.windowResized = function () {
      $p.resizeCanvas(container.clientWidth, container.clientHeight);
    };
  };
}
