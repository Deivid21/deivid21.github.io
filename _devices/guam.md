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
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    type: test
    android: 17
    version: "24.0"
    status: active
    date: 2026-11-06
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261106-UNOFFICIAL-guam/lineage-24.0-20261106-UNOFFICIAL-guam.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-24.0-20261106-UNOFFICIAL-guam
    sha256: "a043b741af75ca958c8a169bb61fee43076acd76f25f246f02849ff858e9b7b2"
    filesize: "1.67 GB"
    security_patch: November 2026
    gapps: true
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-e7-plus-guam.4807801/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261106-UNOFFICIAL-guam/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261106-UNOFFICIAL-guam/dtbo.img
      - name: recovery.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261106-UNOFFICIAL-guam/recovery.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261106-UNOFFICIAL-guam/vbmeta.img
    notes: "Test build: November 2026 security patch, SELinux set to permissive, Linux kernel 4.19.325-cip136. Also EROFS filesystem, odm partition, higher dalvik-heap limits, blurs available (off by default), camera blobs from guamna, overlays from guamp and Moto Camera 2 built from prebuilt source."
    notes_es: "Build de prueba: parche de seguridad de noviembre de 2026, SELinux en permissive, kernel Linux 4.19.325-cip136. Además: sistema de archivos EROFS, partición odm, límites de dalvik-heap más altos, blurs disponibles (desactivados por defecto), blobs de cámara de guamna, overlays de guamp y Moto Camera 2 compilada desde prebuilts."
---
