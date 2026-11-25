---
codename: cypfq
name: "Moto G51 5G"
vendor: Motorola
common: sm6375
platform: sm4350
soc: "Snapdragon 480+"
android: 17
order: 18
maintained: true

roms:
  - name: Evolution X
    released: false
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    released: false
    forum: https://xdaforums.com/t/rom-17-unofficial-lineageos-24-0-for-moto-g51-5g-cypfq.4810100/
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    type: test
    android: 17
    version: "24.0"
    status: active
    date: 2026-11-25
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261125-UNOFFICIAL-cypfq/lineage-24.0-20261125-UNOFFICIAL-cypfq.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-24.0-20261125-UNOFFICIAL-cypfq
    sha256: "26f59340a9cb17cdf2894b66dbbd8ddbc4aac29b2f9b4482dd45ece15d265f16"
    filesize: "1.38 GB"
    security_patch: November 2026
    gapps: true
    forum: https://xdaforums.com/t/rom-17-unofficial-lineageos-24-0-for-moto-g51-5g-cypfq.4810100/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261125-UNOFFICIAL-cypfq/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261125-UNOFFICIAL-cypfq/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261125-UNOFFICIAL-cypfq/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261125-UNOFFICIAL-cypfq/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261125-UNOFFICIAL-cypfq/vendor_boot.img
    notes: "First test build: initial LineageOS 24.0 build with November 2026 security patch, SELinux enforcing, GApps (MindTheGapps) included, Linux kernel 5.4.302 and EROFS filesystem. Moto Camera is not included in this build."
    notes_es: "Primera build de prueba: build inicial de LineageOS 24.0 con parche de seguridad de noviembre de 2026, SELinux enforcing, GApps (MindTheGapps) incluidas, kernel Linux 5.4.302 y sistema de archivos EROFS. Moto Camera no está incluida en esta build."
---
