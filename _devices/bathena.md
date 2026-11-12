---
codename: bathena
name: "Motorola Defy 2021"
vendor: Motorola
common: sm6225
platform: sm6115
soc: "Snapdragon 662"
android: 17
order: 34
maintained: true

roms:
  - name: Evolution X
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-motorola-defy-2021-bathena.4734636/
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    type: test
    android: 17
    version: "24.0"
    status: active
    date: 2026-11-12
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261112-UNOFFICIAL-bathena/lineage-24.0-20261112-UNOFFICIAL-bathena.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-24.0-20261112-UNOFFICIAL-bathena
    sha256: "2466f5ba6bde519acb2e94939c587c03a74bb7717a477dc40dfe4cb7026a25a9"
    filesize: "1.46 GB"
    security_patch: November 2026
    gapps: true
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-motorola-defy-2021-bathena.4734636/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261112-UNOFFICIAL-bathena/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261112-UNOFFICIAL-bathena/dtbo.img
      - name: recovery.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261112-UNOFFICIAL-bathena/recovery.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261112-UNOFFICIAL-bathena/vbmeta.img
    notes: "Test build: November 2026 security patch, SELinux enforcing, GApps (MindTheGapps) included, Linux kernel 4.19.325-cip136 and a fix for the screen sometimes staying black and not turning off properly after locking. Also odm partition, dalvik heap and LMKD settings per RAM variant, blurs available (off by default), Moto Camera 2 built from prebuilt source and libaidenoiser for the camera."
    notes_es: "Build de prueba: parche de seguridad de noviembre de 2026, SELinux enforcing, GApps (MindTheGapps) incluidas, kernel Linux 4.19.325-cip136 y corrección de la pantalla que a veces quedaba en negro y no se apagaba bien al bloquear. Además: partición odm, ajustes de dalvik heap y LMKD según la variante de RAM, blurs disponibles (desactivados por defecto), Moto Camera 2 compilada desde prebuilts y libaidenoiser para la cámara."
  - name: LineageOS
    archived: true
    android: 16
    version: "23.2"
    status: discontinued
    date: 2026-10-09
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261009-nightly-bathena-signed/lineage-23.2-20261009-nightly-bathena-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-23.2-20261009-nightly-bathena-signed
    sha256: "5e9faef67726bc6200ded2eb3c34c4ad92eade1c33f3f1e036e8688693f2e7fc"
    filesize: "1.00 GB"
    security_patch: October 2026
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-motorola-defy-2021-bathena.4734636/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261009-nightly-bathena-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261009-nightly-bathena-signed/dtbo.img
      - name: recovery.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261009-nightly-bathena-signed/recovery.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261009-nightly-bathena-signed/vbmeta.img
    notes: "Last official LineageOS 23.2 nightly build (signed): October 2026 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 23.2 (firmada): parche de seguridad de octubre de 2026, SELinux enforcing. Ya no se actualiza."
  - name: LineageOS
    archived: true
    android: 15
    version: "22.2"
    status: discontinued
    date: 2025-10-10
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251010-nightly-bathena-signed/lineage-22.2-20251010-nightly-bathena-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-22.2-20251010-nightly-bathena-signed
    sha256: "5fbc308fe32eb52128fc289bc9173a5e6b3bed6878313b28a2be5d3cc4a63e72"
    filesize: "0.93 GB"
    security_patch: October 2025
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-motorola-defy-2021-bathena.4734636/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251010-nightly-bathena-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251010-nightly-bathena-signed/dtbo.img
      - name: recovery.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251010-nightly-bathena-signed/recovery.img
      - name: super_empty.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251010-nightly-bathena-signed/super_empty.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251010-nightly-bathena-signed/vbmeta.img
    notes: "Last official LineageOS 22.2 nightly build (signed): October 2025 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 22.2 (firmada): parche de seguridad de octubre de 2025, SELinux enforcing. Ya no se actualiza."
---
