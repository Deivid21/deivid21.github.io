---
codename: borneo
name: "Moto G Power 2021"
vendor: Motorola
common: sm6225
platform: sm6115
soc: "Snapdragon 662"
android: 17
order: 12
maintained: true

roms:
  - name: Evolution X
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g-power-2021-borneo.4808031/
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    type: test
    android: 17
    version: "24.0"
    status: active
    date: 2026-11-08
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261108-UNOFFICIAL-borneo/lineage-24.0-20261108-UNOFFICIAL-borneo.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-24.0-20261108-UNOFFICIAL-borneo
    sha256: "f3115135846673eb0067e7b73674a73c591ea9c01b70368b1c3dbc1d2970b1b8"
    filesize: "1.37 GB"
    security_patch: November 2026
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g-power-2021-borneo.4808031/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261108-UNOFFICIAL-borneo/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261108-UNOFFICIAL-borneo/dtbo.img
      - name: recovery.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261108-UNOFFICIAL-borneo/recovery.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261108-UNOFFICIAL-borneo/vbmeta.img
    notes: "Test build: November 2026 security patch, SELinux set to permissive, Linux kernel 4.19.325-cip136 and a fix for the screen sometimes staying black and not turning off properly after locking. Also EROFS filesystem, odm partition, higher dalvik-heap limits, blurs available (off by default) and Moto Camera 4 built from prebuilt source."
    notes_es: "Build de prueba: parche de seguridad de noviembre de 2026, SELinux en permissive, kernel Linux 4.19.325-cip136 y corrección de la pantalla que a veces quedaba en negro y no se apagaba bien al bloquear. Además: sistema de archivos EROFS, partición odm, límites de dalvik-heap más altos, blurs disponibles (desactivados por defecto) y Moto Camera 4 compilada desde prebuilts."
  - name: LineageOS
    archived: true
    android: 16
    version: "23.2"
    status: discontinued
    date: 2026-10-10
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261010-nightly-borneo-signed/lineage-23.2-20261010-nightly-borneo-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-23.2-20261010-nightly-borneo-signed
    sha256: "e51d8ade08f6248f3115343196765e8467234cf4781777fc5da103bf1551d4dd"
    filesize: "1.03 GB"
    security_patch: October 2026
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g-power-2021-borneo.4808031/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261010-nightly-borneo-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261010-nightly-borneo-signed/dtbo.img
      - name: recovery.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261010-nightly-borneo-signed/recovery.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261010-nightly-borneo-signed/vbmeta.img
    notes: "Last official LineageOS 23.2 nightly build (signed): October 2026 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 23.2 (firmada): parche de seguridad de octubre de 2026, SELinux enforcing. Ya no se actualiza."
  - name: LineageOS
    archived: true
    android: 15
    version: "22.2"
    status: discontinued
    date: 2025-10-11
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251011-nightly-borneo-signed/lineage-22.2-20251011-nightly-borneo-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-22.2-20251011-nightly-borneo-signed
    sha256: "1108045db118fa255436a453cc94b041ee587b4b9bfb6c8483961473427e8274"
    filesize: "0.96 GB"
    security_patch: October 2025
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g-power-2021-borneo.4808031/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251011-nightly-borneo-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251011-nightly-borneo-signed/dtbo.img
      - name: recovery.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251011-nightly-borneo-signed/recovery.img
      - name: super_empty.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251011-nightly-borneo-signed/super_empty.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251011-nightly-borneo-signed/vbmeta.img
    notes: "Last official LineageOS 22.2 nightly build (signed): October 2025 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 22.2 (firmada): parche de seguridad de octubre de 2025, SELinux enforcing. Ya no se actualiza."
  - name: LineageOS
    archived: true
    android: 14
    version: "21.0"
    status: discontinued
    date: 2024-12-28
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241228-nightly-borneo-signed/lineage-21.0-20241228-nightly-borneo-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-21.0-20241228-nightly-borneo-signed
    sha256: "86a44aae5cc49d3c45cba069edf796c037e454deba97410fe226d3a56c549b21"
    filesize: "0.91 GB"
    security_patch: December 2024
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g-power-2021-borneo.4808031/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241228-nightly-borneo-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241228-nightly-borneo-signed/dtbo.img
      - name: recovery.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241228-nightly-borneo-signed/recovery.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241228-nightly-borneo-signed/vbmeta.img
    notes: "Last official LineageOS 21.0 nightly build (signed): December 2024 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 21.0 (firmada): parche de seguridad de diciembre de 2024, SELinux enforcing. Ya no se actualiza."
---
