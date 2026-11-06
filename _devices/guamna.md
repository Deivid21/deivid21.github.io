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
    date: 2026-11-06
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261106-UNOFFICIAL-guamna/lineage-24.0-20261106-UNOFFICIAL-guamna.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-24.0-20261106-UNOFFICIAL-guamna
    sha256: "1202bfd6e5526e37534f23647454200de11d9e1452a9627431ae3ed58fa796d0"
    filesize: "1.65 GB"
    security_patch: November 2026
    gapps: true
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g-play-2021-guamna.4800732/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261106-UNOFFICIAL-guamna/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261106-UNOFFICIAL-guamna/dtbo.img
      - name: recovery.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261106-UNOFFICIAL-guamna/recovery.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261106-UNOFFICIAL-guamna/vbmeta.img
    notes: "Test build: November 2026 security patch, SELinux set to permissive, Linux kernel 4.19.325-cip136. Also EROFS filesystem, odm partition, higher dalvik-heap limits, blurs available (off by default) and Moto Camera 4 built from prebuilt source."
    notes_es: "Build de prueba: parche de seguridad de noviembre de 2026, SELinux en permissive, kernel Linux 4.19.325-cip136. Además: sistema de archivos EROFS, partición odm, límites de dalvik-heap más altos, blurs disponibles (desactivados por defecto) y Moto Camera 4 compilada desde prebuilts."
---
