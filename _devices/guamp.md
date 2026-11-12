---
codename: guamp
name: "Moto G9 Play"
aka: ["Moto G9", "Lenovo K12 Note"]
vendor: Motorola
common: sm6225
platform: sm6115
soc: "Snapdragon 662"
android: 17
order: 7
maintained: true

roms:
  - name: Evolution X
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g9-play-moto-g9-guamp.4733352/
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    type: test
    android: 17
    version: "24.0"
    status: active
    date: 2026-11-12
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261112-UNOFFICIAL-guamp/lineage-24.0-20261112-UNOFFICIAL-guamp.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-24.0-20261112-UNOFFICIAL-guamp
    sha256: "65fcebbcc32e7e453268f157e326369e10854e810a552d1a46b3957c6f3da123"
    filesize: "1.46 GB"
    security_patch: November 2026
    gapps: true
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g9-play-moto-g9-guamp.4733352/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261112-UNOFFICIAL-guamp/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261112-UNOFFICIAL-guamp/dtbo.img
      - name: recovery.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261112-UNOFFICIAL-guamp/recovery.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261112-UNOFFICIAL-guamp/vbmeta.img
    notes: "Test build: November 2026 security patch, SELinux enforcing, GApps (MindTheGapps) included, Linux kernel 4.19.325-cip136 and a fix for the screen sometimes staying black and not turning off properly after locking. Also odm partition, dalvik heap and LMKD settings per RAM variant, blurs available (off by default), Moto Camera 2 built from prebuilt source and libaidenoiser for the camera. SKU specific properties moved to the product partition."
    notes_es: "Build de prueba: parche de seguridad de noviembre de 2026, SELinux enforcing, GApps (MindTheGapps) incluidas, kernel Linux 4.19.325-cip136 y corrección de la pantalla que a veces quedaba en negro y no se apagaba bien al bloquear. Además: partición odm, ajustes de dalvik heap y LMKD según la variante de RAM, blurs disponibles (desactivados por defecto), Moto Camera 2 compilada desde prebuilts y libaidenoiser para la cámara. Propiedades específicas de cada SKU movidas a la partición product."
  - name: LineageOS
    archived: true
    android: 15
    version: "22.2"
    status: discontinued
    date: 2025-10-06
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251006-nightly-guamp-signed/lineage-22.2-20251006-nightly-guamp-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-22.2-20251006-nightly-guamp-signed
    sha256: "bb67945f9128e2e5d372745eabdcb9ea337922db4b42762b56d965846c79e58b"
    filesize: "0.93 GB"
    security_patch: September 2025
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g9-play-moto-g9-guamp.4733352/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251006-nightly-guamp-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251006-nightly-guamp-signed/dtbo.img
      - name: recovery.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251006-nightly-guamp-signed/recovery.img
      - name: super_empty.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251006-nightly-guamp-signed/super_empty.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251006-nightly-guamp-signed/vbmeta.img
    notes: "Last official LineageOS 22.2 nightly build (signed): September 2025 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 22.2 (firmada): parche de seguridad de septiembre de 2025, SELinux enforcing. Ya no se actualiza."
  - name: LineageOS
    archived: true
    android: 14
    version: "21.0"
    status: discontinued
    date: 2024-12-30
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241230-nightly-guamp-signed/lineage-21.0-20241230-nightly-guamp-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-21.0-20241230-nightly-guamp-signed
    sha256: "475020fbf466cc7f286496adcc0b9639121560bf07d93f34bd0385d2c1843a31"
    filesize: "0.88 GB"
    security_patch: December 2024
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g9-play-moto-g9-guamp.4733352/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241230-nightly-guamp-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241230-nightly-guamp-signed/dtbo.img
      - name: recovery.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241230-nightly-guamp-signed/recovery.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241230-nightly-guamp-signed/vbmeta.img
    notes: "Last official LineageOS 21.0 nightly build (signed): December 2024 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 21.0 (firmada): parche de seguridad de diciembre de 2024, SELinux enforcing. Ya no se actualiza."
---
