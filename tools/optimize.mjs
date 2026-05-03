/**
 * optimize.mjs — Optimización de imágenes del proyecto Alianzas Valderrama
 * Convierte PNG/JPG → WebP (alta calidad), optimiza SVG con SVGO
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { createRequire } from 'module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const IMG_DIR = path.join(ROOT, 'assets', 'img');

// Resolver módulos desde la raíz del proyecto (donde está node_modules)
const require = createRequire(pathToFileURL(path.join(ROOT, 'package.json')));
const sharpMod = await import(pathToFileURL(require.resolve('sharp')));
const sharp = sharpMod.default;
const svgoMod = await import(pathToFileURL(require.resolve('svgo')));
const { optimize: svgoOptimize } = svgoMod;

// ── 2. Configuración de imágenes a procesar ────────────────────────────────
const tasks = [
    // Fotos → WebP calidad 85 (imperceptible, -60-70% tamaño)
    { src: 'portada.png',          dst: 'portada.webp',          quality: 85, type: 'photo' },
    { src: 'portada.png',          dst: 'portada.png',           quality: 85, type: 'png-opt' },
    { src: 'portada01.png',        dst: 'portada01.webp',        quality: 85, type: 'photo' },
    { src: 'portada01.png',        dst: 'portada01.png',         quality: 85, type: 'png-opt' },
    { src: 'portada02.png',        dst: 'portada02.webp',        quality: 85, type: 'photo' },
    { src: 'portada02.png',        dst: 'portada02.png',         quality: 85, type: 'png-opt' },
    { src: 'portada2.png',         dst: 'portada2.webp',         quality: 85, type: 'photo' },
    { src: 'portada2.png',         dst: 'portada2.png',          quality: 85, type: 'png-opt' },
    // Logos → WebP lossless (0% pérdida de calidad)
    { src: 'logo.png',             dst: 'logo.webp',             quality: 90, type: 'logo' },
    { src: 'logo.png',             dst: 'logo.png',              quality: 90, type: 'png-opt' },
    { src: 'logo0.png',            dst: 'logo0.webp',            quality: 90, type: 'logo' },
    { src: 'logo0.png',            dst: 'logo0.png',             quality: 90, type: 'png-opt' },
    { src: 'logo2.png',            dst: 'logo2.webp',            quality: 90, type: 'logo' },
    { src: 'logo2.png',            dst: 'logo2.png',             quality: 90, type: 'png-opt' },
    { src: 'logo-transparent.png', dst: 'logo-transparent.webp', quality: 90, type: 'logo' },
    { src: 'logo-transparent.png', dst: 'logo-transparent.png',  quality: 90, type: 'png-opt' },
    // Fotos JPG
    { src: 'about-meeting.jpg',    dst: 'about-meeting.webp',    quality: 85, type: 'photo' },
    { src: 'about-meeting.jpg',    dst: 'about-meeting.jpg',     quality: 85, type: 'jpg-opt' },
    { src: 'audit.jpg',            dst: 'audit.webp',            quality: 85, type: 'photo' },
    { src: 'audit.jpg',            dst: 'audit.jpg',             quality: 85, type: 'jpg-opt' },
    { src: 'building.jpg',         dst: 'building.webp',         quality: 85, type: 'photo' },
    { src: 'building.jpg',         dst: 'building.jpg',          quality: 85, type: 'jpg-opt' },
    { src: 'consulting.jpg',       dst: 'consulting.webp',       quality: 85, type: 'photo' },
    { src: 'consulting.jpg',       dst: 'consulting.jpg',        quality: 85, type: 'jpg-opt' },
    { src: 'payroll.jpg',          dst: 'payroll.webp',          quality: 85, type: 'photo' },
    { src: 'payroll.jpg',          dst: 'payroll.jpg',           quality: 85, type: 'jpg-opt' },
];

function fmtSize(bytes) {
    if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    return (bytes / 1024).toFixed(1) + ' KB';
}

// ── 3. Procesar imágenes ───────────────────────────────────────────────────
console.log('\n🖼️  Optimizando imágenes…\n');
let totalBefore = 0, totalAfter = 0;

for (const task of tasks) {
    const srcPath = path.join(IMG_DIR, task.src);
    const dstPath = path.join(IMG_DIR, task.dst);
    
    if (!fs.existsSync(srcPath)) {
        console.log(`  ⚠️  No encontrado: ${task.src} — omitido`);
        continue;
    }

    const sizeBefore = fs.statSync(srcPath).size;
    totalBefore += sizeBefore;

    try {
        let pipeline = sharp(srcPath);

        if (task.dst.endsWith('.webp')) {
            if (task.type === 'logo') {
                pipeline = pipeline.webp({ lossless: true, quality: task.quality });
            } else {
                pipeline = pipeline.webp({ quality: task.quality });
            }
        } else if (task.dst.endsWith('.png')) {
            pipeline = pipeline.png({ compressionLevel: 9, quality: task.quality });
        } else if (task.dst.endsWith('.jpg') || task.dst.endsWith('.jpeg')) {
            pipeline = pipeline.jpeg({ quality: task.quality, mozjpeg: true });
        }

        await pipeline.toFile(dstPath + '.tmp');
        
        // Solo reemplazar si el resultado es más pequeño
        const sizeAfter = fs.statSync(dstPath + '.tmp').size;
        if (sizeAfter < sizeBefore || task.dst !== task.src) {
            if (fs.existsSync(dstPath)) fs.unlinkSync(dstPath);
            fs.renameSync(dstPath + '.tmp', dstPath);
            totalAfter += sizeAfter;
            const saving = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);
            console.log(`  ✅ ${task.src.padEnd(22)} → ${task.dst.padEnd(22)}  ${fmtSize(sizeBefore).padStart(9)} → ${fmtSize(sizeAfter).padStart(9)}  (-${saving}%)`);
        } else {
            fs.unlinkSync(dstPath + '.tmp');
            totalAfter += sizeBefore;
            console.log(`  ⏭️  ${task.src.padEnd(22)} → ya optimizado, se mantiene`);
        }
    } catch (err) {
        if (fs.existsSync(dstPath + '.tmp')) fs.unlinkSync(dstPath + '.tmp');
        console.log(`  ❌ Error en ${task.src}: ${err.message}`);
        totalAfter += sizeBefore;
    }
}

// ── 4. Optimizar SVG con SVGO ─────────────────────────────────────────────
console.log('\n🔧 Optimizando SVG…\n');
const svgFiles = fs.readdirSync(IMG_DIR).filter(f => f.endsWith('.svg'));

for (const file of svgFiles) {
    const filePath = path.join(IMG_DIR, file);
    const original = fs.readFileSync(filePath, 'utf8');
    const sizeBefore = fs.statSync(filePath).size;
    totalBefore += sizeBefore;

    try {
        const result = svgoOptimize(original, {
            path: filePath,
            multipass: true,
            plugins: [
                { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
                'removeComments',
                'removeMetadata',
                'removeTitle',
                'removeDesc',
            ]
        });

        fs.writeFileSync(filePath, result.data, 'utf8');
        const sizeAfter = fs.statSync(filePath).size;
        totalAfter += sizeAfter;
        const saving = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);
        console.log(`  ✅ ${file.padEnd(22)}  ${fmtSize(sizeBefore).padStart(9)} → ${fmtSize(sizeAfter).padStart(9)}  (-${saving}%)`);
    } catch (err) {
        totalAfter += sizeBefore;
        console.log(`  ❌ Error SVG ${file}: ${err.message}`);
    }
}

// ── 5. Resumen ────────────────────────────────────────────────────────────
const totalSaving = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
console.log('\n' + '═'.repeat(65));
console.log(`  📊 TOTAL IMÁGENES  ${fmtSize(totalBefore).padStart(10)} → ${fmtSize(totalAfter).padStart(10)}  (-${totalSaving}%)`);
console.log('═'.repeat(65) + '\n');
console.log('✨ Optimización completada.\n');
