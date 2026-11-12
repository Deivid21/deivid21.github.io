---
codename: guam
name: "Moto E7 Plus"
aka: ["Lenovo K12"]
vendor: Motorola
common: sm6225
platform: sm4250
soc: "Snapdragon 460"
android: 17
order: 1
maintained: true

roms:
  - name: Evolution X
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-e7-plus-guam.4807801/
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    type: test
    android: 17
    version: "24.0"
    status: active
    date: 2026-11-12
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261112-UNOFFICIAL-guam/lineage-24.0-20261112-UNOFFICIAL-guam.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-24.0-20261112-UNOFFICIAL-guam
    sha256: "4d0483a351b56aaa1b091ebb442e525bc87e155f95a8c9f387a73b7ff40c28be"
    filesize: "1.45 GB"
    security_patch: November 2026
    gapps: true
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-e7-plus-guam.4807801/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261112-UNOFFICIAL-guam/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261112-UNOFFICIAL-guam/dtbo.img
      - name: recovery.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261112-UNOFFICIAL-guam/recovery.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261112-UNOFFICIAL-guam/vbmeta.img
    notes: "Test build: November 2026 security patch, SELinux enforcing, GApps (MindTheGapps) included, Linux kernel 4.19.325-cip136 and a fix for the screen sometimes staying black and not turning off properly after locking. Also odm partition, dalvik heap and LMKD settings per RAM variant, blurs available (off by default), Moto Camera 2 built from prebuilt source, libaidenoiser for the camera, camera blobs from guamna_retail RZA31.Q2-146-14-22-2 and overlay configs from guamp_retail. SKU specific properties moved to the product partition."
    notes_es: "Build de prueba: parche de seguridad de noviembre de 2026, SELinux enforcing, GApps (MindTheGapps) incluidas, kernel Linux 4.19.325-cip136 y corrección de la pantalla que a veces quedaba en negro y no se apagaba bien al bloquear. Además: partición odm, ajustes de dalvik heap y LMKD según la variante de RAM, blurs disponibles (desactivados por defecto), Moto Camera 2 compilada desde prebuilts, libaidenoiser para la cámara, blobs de cámara de guamna_retail RZA31.Q2-146-14-22-2 y overlays de guamp_retail. Propiedades específicas de cada SKU movidas a la partición product."
  - name: LineageOS
    archived: true
    android: 15
    version: "22.2"
    status: discontinued
    date: 2025-10-09
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-guam-signed/lineage-22.2-20251009-nightly-guam-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-22.2-20251009-nightly-guam-signed
    sha256: "0776e04f4901e9fbeed128eae8beafdf84e26b2e8605c374841b9a50e444bd6b"
    filesize: "0.93 GB"
    security_patch: October 2025
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-e7-plus-guam.4807801/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-guam-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-guam-signed/dtbo.img
      - name: recovery.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-guam-signed/recovery.img
      - name: super_empty.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-guam-signed/super_empty.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-guam-signed/vbmeta.img
    notes: "Last official LineageOS 22.2 nightly build (signed): October 2025 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 22.2 (firmada): parche de seguridad de octubre de 2025, SELinux enforcing. Ya no se actualiza."
  - name: LineageOS
    archived: true
    android: 14
    version: "21.0"
    status: discontinued
    date: 2024-12-26
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241226-nightly-guam-signed/lineage-21.0-20241226-nightly-guam-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-21.0-20241226-nightly-guam-signed
    sha256: "4cc68ca329cb76bee3eced5310bd7f1a54a9acf99aa303959057c1670d0bbd4c"
    filesize: "0.88 GB"
    security_patch: December 2024
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-e7-plus-guam.4807801/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241226-nightly-guam-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241226-nightly-guam-signed/dtbo.img
      - name: recovery.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241226-nightly-guam-signed/recovery.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241226-nightly-guam-signed/vbmeta.img
    notes: "Last official LineageOS 21.0 nightly build (signed): December 2024 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 21.0 (firmada): parche de seguridad de diciembre de 2024, SELinux enforcing. Ya no se actualiza."
---
