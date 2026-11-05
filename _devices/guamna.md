---
codename: guamna
name: "Moto G Play 2021"
vendor: Motorola
common: sm6225
platform: sm4250
soc: "Snapdragon 460"
android: 17
order: 11
maintained: true

roms:
  - name: Evolution X
    released: false
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    type: test
    android: 17
    version: "24.0"
    status: active
    date: 2026-11-05
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261104-UNOFFICIAL-guamna/lineage-24.0-20261105-UNOFFICIAL-guamna.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-24.0-20261104-UNOFFICIAL-guamna
    sha256: "b6c9d0821c2d599de0bf35a17d98f3e21f7ae05161d33850da3012dc85f7eee8"
    filesize: "1.65 GB"
    security_patch: October 2026
    gapps: true
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g-play-2021-guamna.4800732/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261104-UNOFFICIAL-guamna/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261104-UNOFFICIAL-guamna/dtbo.img
      - name: recovery.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261104-UNOFFICIAL-guamna/recovery.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261104-UNOFFICIAL-guamna/vbmeta.img
    notes: "Test build: EROFS filesystem, odm partition, higher dalvik-heap limits, blurs available (off by default) and Moto Camera 4 built from prebuilt source. SELinux enforcing, Linux kernel 4.19.325-cip136."
    notes_es: "Build de prueba: sistema de archivos EROFS, partición odm, límites de dalvik-heap más altos, blurs disponibles (desactivados por defecto) y Moto Camera 4 compilada desde prebuilts. SELinux enforcing, kernel Linux 4.19.325-cip136."
---
