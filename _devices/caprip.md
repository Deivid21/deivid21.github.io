---
codename: caprip
name: "Moto G30"
aka: ["Lenovo K13 Pro"]
vendor: Motorola
common: sm6225
platform: sm6115
soc: "Snapdragon 662"
android: 17
order: 14
maintained: true

roms:
  - name: Evolution X
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g30-caprip.4808041/
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    type: test
    android: 17
    version: "24.0"
    status: active
    date: 2026-11-08
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261108-UNOFFICIAL-caprip/lineage-24.0-20261108-UNOFFICIAL-caprip.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-24.0-20261108-UNOFFICIAL-caprip
    sha256: "4f8370d6d00eafc6ea6f5ff78c68c7e5aa5cf7c754099b5466404cd3e519d48b"
    filesize: "1.32 GB"
    security_patch: November 2026
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g30-caprip.4808041/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261108-UNOFFICIAL-caprip/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261108-UNOFFICIAL-caprip/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261108-UNOFFICIAL-caprip/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261108-UNOFFICIAL-caprip/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261108-UNOFFICIAL-caprip/vendor_boot.img
    notes: "Test build: November 2026 security patch, SELinux set to permissive, Linux kernel 4.19.325-cip136 and a fix for the screen sometimes staying black and not turning off properly after locking. Also EROFS filesystem, odm partition, higher dalvik-heap limits, blurs available (off by default) and Moto Camera 4 built from prebuilt source."
    notes_es: "Build de prueba: parche de seguridad de noviembre de 2026, SELinux en permissive, kernel Linux 4.19.325-cip136 y corrección de la pantalla que a veces quedaba en negro y no se apagaba bien al bloquear. Además: sistema de archivos EROFS, partición odm, límites de dalvik-heap más altos, blurs disponibles (desactivados por defecto) y Moto Camera 4 compilada desde prebuilts."
  - name: LineageOS
    archived: true
    android: 16
    version: "23.2"
    status: discontinued
    date: 2026-10-07
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261007-nightly-caprip-signed/lineage-23.2-20261007-nightly-caprip-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-23.2-20261007-nightly-caprip-signed
    sha256: "99b5d5bbc4a6cd2cdf21ee18dbc4577c993f3d050b8747aa74927ab176ee7099"
    filesize: "1.03 GB"
    security_patch: September 2026
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g30-caprip.4808041/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261007-nightly-caprip-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261007-nightly-caprip-signed/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261007-nightly-caprip-signed/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261007-nightly-caprip-signed/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261007-nightly-caprip-signed/vendor_boot.img
    notes: "Last official LineageOS 23.2 nightly build (signed): September 2026 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 23.2 (firmada): parche de seguridad de septiembre de 2026, SELinux enforcing. Ya no se actualiza."
  - name: LineageOS
    archived: true
    android: 15
    version: "22.2"
    status: discontinued
    date: 2025-10-08
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251008-nightly-caprip-signed/lineage-22.2-20251008-nightly-caprip-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-22.2-20251008-nightly-caprip-signed
    sha256: "1cda4ca879e62775f8def40fb14da4e6217f2f9e49fdb0f8baf7703cfe5d19ad"
    filesize: "0.96 GB"
    security_patch: September 2025
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g30-caprip.4808041/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251008-nightly-caprip-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251008-nightly-caprip-signed/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251008-nightly-caprip-signed/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251008-nightly-caprip-signed/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251008-nightly-caprip-signed/vendor_boot.img
    notes: "Last official LineageOS 22.2 nightly build (signed): September 2025 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 22.2 (firmada): parche de seguridad de septiembre de 2025, SELinux enforcing. Ya no se actualiza."
  - name: LineageOS
    archived: true
    android: 14
    version: "21.0"
    status: discontinued
    date: 2024-12-25
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241225-nightly-caprip-signed/lineage-21.0-20241225-nightly-caprip-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-21.0-20241225-nightly-caprip-signed
    sha256: "41b93aa07d18c95d73064a21469b4a5b4fdbaa5b14cec657d3379d2001146927"
    filesize: "0.91 GB"
    security_patch: December 2024
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g30-caprip.4808041/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241225-nightly-caprip-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241225-nightly-caprip-signed/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241225-nightly-caprip-signed/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241225-nightly-caprip-signed/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-21.0-20241225-nightly-caprip-signed/vendor_boot.img
    notes: "Last official LineageOS 21.0 nightly build (signed): December 2024 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 21.0 (firmada): parche de seguridad de diciembre de 2024, SELinux enforcing. Ya no se actualiza."
  - name: LineageOS
    archived: true
    android: 13
    version: "20.0"
    status: discontinued
    date: 2023-06-30
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-20.0-20230630-nightly-caprip-signed/lineage-20.0-20230630-nightly-caprip-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-20.0-20230630-nightly-caprip-signed
    sha256: "033fbc384f3005806241a9f6e83c3cbab57b63e4336cef653477fe956a049328"
    filesize: "0.78 GB"
    security_patch: June 2023
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g30-caprip.4808041/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-20.0-20230630-nightly-caprip-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-20.0-20230630-nightly-caprip-signed/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-20.0-20230630-nightly-caprip-signed/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-20.0-20230630-nightly-caprip-signed/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-20.0-20230630-nightly-caprip-signed/vendor_boot.img
    notes: "Last official LineageOS 20.0 nightly build (signed): June 2023 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 20.0 (firmada): parche de seguridad de junio de 2023, SELinux enforcing. Ya no se actualiza."
---
