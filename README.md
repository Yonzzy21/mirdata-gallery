# mirdata Gallery

A repository for generating and maintaining structured YAML metadata for all datasets supported by the [`mirdata`](https://github.com/mir-dataset-loaders/mirdata) Python library. These YAML files serve as the **initial** data source for the `mirdata` dataset gallery, search catalogs, and documentation.

---

## How the Script Works

The script (`utils/make_dataset_gallery_yaml.py`) scrapes dataset metadata directly from the `mirdata` codebase, currently without the need for data yet:

1. **Discovery:** Iterates through all registered datasets using `mirdata.list_datasets()` and initializes each loader.
2. **Metadata Extraction:** Gathers high-level attributes (`name`, `license`, `remotes`, `download_info`, `bibtex`) and the module's top-level `docstring`.
3. **Annotation Detection:** Dynamically inspects each dataset's `_track_class` to identify ground-truth annotations (methods decorated with `mirdata.core.cached_property`, such as `notes`, `beats`, or `chords`).
4. **YAML Export:** Formats multiline fields using YAML block scalars (`|`), enables Unicode preservation, and saves each dataset as `<dataset_name>.yaml` in `dataset_yamls/`.

Future work: We will need to understand what info makes most sense to use, and generate formatted cards in the gallery website.
Also, when used with the data, we'll be able to generate some stats on the datasets, etc'.
It is currently scraping for basic annotations, but it is currently not generalizing to all datasets available in mirdata.

---

## 💻 Usage

```bash
# Generate all YAML files (default output: dataset_yamls/)
python utils/make_dataset_gallery_yaml.py

# Or specify a custom output directory:
python utils/make_dataset_gallery_yaml.py --output path/to/folder
