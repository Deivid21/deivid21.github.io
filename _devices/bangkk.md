---
codename: bangkk
name: "Moto G84 5G"
vendor: Motorola
common: sm6375
platform: sm6375
soc: "Snapdragon 695"
android: 17
order: 27
maintained: true

roms:
  - name: Evolution X
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g84-5g-bangkk.4808938/
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    type: test
    android: 17
    version: "24.0"
    status: active
    date: 2026-11-16
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-bangkk/lineage-24.0-20261116-UNOFFICIAL-bangkk.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-24.0-20261116-UNOFFICIAL-bangkk
    sha256: "b5a9c2756cf9e1afdea6c1b93e91a706a835dda9161f1f7cb84d30a29e1c2660"
    filesize: "1.58 GB"
    security_patch: November 2026
    gapps: true
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g84-5g-bangkk.4808938/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-bangkk/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-bangkk/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-bangkk/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-bangkk/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-bangkk/vendor_boot.img
    notes: "Test build: November 2026 security patch, SELinux enforcing, GApps (MindTheGapps) included and Linux kernel 5.4.302. Also odm partition, dalvik heap and LMKD settings per RAM variant, Fluence NN audio processing disabled, Moto Camera 4 built from prebuilt source and missing camera libraries added. Screen density set to 420, missing ANC blobs for the camera added and Fluence NN audio mixer paths removed."
    notes_es: "Build de prueba: parche de seguridad de noviembre de 2026, SELinux enforcing, GApps (MindTheGapps) incluidas y kernel Linux 5.4.302. Además: partición odm, ajustes de dalvik heap y LMKD según la variante de RAM, procesamiento de audio Fluence NN desactivado, Moto Camera 4 compilada desde prebuilts y librerías de cámara que faltaban. Densidad de pantalla en 420, blobs ANC de cámara que faltaban y rutas de audio Fluence NN eliminadas."
  - name: LineageOS
    archived: true
    android: 16
    version: "23.2"
    status: discontinued
    date: 2026-10-09
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261009-nightly-bangkk-signed/lineage-23.2-20261009-nightly-bangkk-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-23.2-20261009-nightly-bangkk-signed
    sha256: "9749754aaf7dca4f7cf12f1bc9785531b9c55cb5979104b94630be730b7afcdc"
    filesize: "1.12 GB"
    security_patch: October 2026
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g84-5g-bangkk.4808938/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261009-nightly-bangkk-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261009-nightly-bangkk-signed/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261009-nightly-bangkk-signed/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261009-nightly-bangkk-signed/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261009-nightly-bangkk-signed/vendor_boot.img
    notes: "Last official LineageOS 23.2 nightly build (signed): October 2026 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 23.2 (firmada): parche de seguridad de octubre de 2026, SELinux enforcing. Ya no se actualiza."
  - name: LineageOS
    archived: true
    android: 15
    version: "22.2"
    status: discontinued
    date: 2025-10-10
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251010-nightly-bangkk-signed/lineage-22.2-20251010-nightly-bangkk-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-22.2-20251010-nightly-bangkk-signed
    sha256: "f09d64a8441535dc7922bfec8afb89b279f9b60fbaf6b5fd00ac108bccbabf07"
    filesize: "1.06 GB"
    security_patch: October 2025
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g84-5g-bangkk.4808938/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251010-nightly-bangkk-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251010-nightly-bangkk-signed/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251010-nightly-bangkk-signed/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251010-nightly-bangkk-signed/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251010-nightly-bangkk-signed/vendor_boot.img
    notes: "Last official LineageOS 22.2 nightly build (signed): October 2025 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 22.2 (firmada): parche de seguridad de octubre de 2025, SELinux enforcing. Ya no se actualiza."
---
