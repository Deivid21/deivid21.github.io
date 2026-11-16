---
codename: fogo
name: "Moto G 5G – 2024"
vendor: Motorola
common: sm6375
platform: sm4375
soc: "Snapdragon 4 Gen 1"
android: 17
order: 29
maintained: true

roms:
  - name: Evolution X
    released: false
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g-5g-2024-fogo.4808935/
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    type: test
    android: 17
    version: "24.0"
    status: active
    date: 2026-11-16
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-fogo/lineage-24.0-20261116-UNOFFICIAL-fogo.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-24.0-20261116-UNOFFICIAL-fogo
    sha256: "b58ea6d0617ed3e2ee998130fef2f8a4cb8176fb5cf460042e019c55c653f267"
    filesize: "1.54 GB"
    security_patch: November 2026
    gapps: true
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g-5g-2024-fogo.4808935/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-fogo/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-fogo/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-fogo/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-fogo/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-fogo/vendor_boot.img
    notes: "Test build: November 2026 security patch, SELinux enforcing, GApps (MindTheGapps) included and Linux kernel 5.4.302. Also odm partition, dalvik heap and LMKD settings per RAM variant, Fluence NN audio processing disabled, Moto Camera 4 built from prebuilt source and missing camera libraries added. Missing ANC blobs for the camera added and Fluence NN audio mixer paths removed."
    notes_es: "Build de prueba: parche de seguridad de noviembre de 2026, SELinux enforcing, GApps (MindTheGapps) incluidas y kernel Linux 5.4.302. Además: partición odm, ajustes de dalvik heap y LMKD según la variante de RAM, procesamiento de audio Fluence NN desactivado, Moto Camera 4 compilada desde prebuilts y librerías de cámara que faltaban. Blobs ANC de cámara que faltaban y rutas de audio Fluence NN eliminadas."
  - name: LineageOS
    archived: true
    android: 16
    version: "23.2"
    status: discontinued
    date: 2026-10-08
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-fogo-signed/lineage-23.2-20261008-nightly-fogo-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-23.2-20261008-nightly-fogo-signed
    sha256: "91de9d6017416082a5da7e4fde22d734c9974d164ddf3520adf374e29e797257"
    filesize: "1.11 GB"
    security_patch: September 2026
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g-5g-2024-fogo.4808935/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-fogo-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-fogo-signed/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-fogo-signed/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-fogo-signed/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-fogo-signed/vendor_boot.img
    notes: "Last official LineageOS 23.2 nightly build (signed): September 2026 security patch, SELinux enforcing. No longer updated. Unmodified official nightly, mirrored for archival."
    notes_es: "Última nightly oficial de LineageOS 23.2 (firmada): parche de seguridad de septiembre de 2026, SELinux enforcing. Ya no se actualiza. Nightly oficial sin modificar, respaldada como archivo."
  - name: LineageOS
    archived: true
    android: 15
    version: "22.2"
    status: discontinued
    date: 2025-10-09
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-fogo-signed/lineage-22.2-20251009-nightly-fogo-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-22.2-20251009-nightly-fogo-signed
    sha256: "5eac6afdce374a05d980148192b9122d0f579b30aaf4139ac1b2f12ac99906a7"
    filesize: "1.05 GB"
    security_patch: October 2025
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g-5g-2024-fogo.4808935/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-fogo-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-fogo-signed/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-fogo-signed/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-fogo-signed/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-fogo-signed/vendor_boot.img
    notes: "Last official LineageOS 22.2 nightly build (signed): October 2025 security patch, SELinux enforcing. No longer updated. Unmodified official nightly, mirrored for archival."
    notes_es: "Última nightly oficial de LineageOS 22.2 (firmada): parche de seguridad de octubre de 2025, SELinux enforcing. Ya no se actualiza. Nightly oficial sin modificar, respaldada como archivo."
---
