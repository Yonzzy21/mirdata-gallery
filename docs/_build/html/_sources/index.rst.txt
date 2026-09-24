mirdata Dataset Gallery
=======================

Explore all supported datasets in ``mirdata``.



acousticbrainz_genre
--------------------


* **Annotations:** ``Genre``


**About this dataset:**
   
Acoustic Brainz Genre dataset


    The AcousticBrainz Genre Dataset consists of four datasets of genre annotations and music features extracted from audio
    suited for evaluation of hierarchical multi-label genre classification systems.

    Description about the music features can be found here: https://essentia.upf.edu/streaming_extractor_music.html

    The datasets are used within the MediaEval AcousticBrainz Genre Task. The task is focused on content-based music
    genre recognition using genre annotations from multiple sources and large-scale music features data available in the
    AcousticBrainz database. The goal of our task is to explore how the same music pieces can be annotated differently by
    different communities following different genre taxonomies, and how this should be addressed by content-based genre r
    ecognition systems.

    We provide four datasets containing genre and subgenre annotations extracted from four different online metadata sources:

    - AllMusic and Discogs are based on editorial metadata databases maintained by music experts and enthusiasts. These sources
      contain explicit genre/subgenre annotations of music releases (albums) following a predefined genre namespace and taxonomy.
      We propagated release-level annotations to recordings (tracks) in AcousticBrainz to build the datasets.
    - Lastfm and Tagtraum are based on collaborative music tagging platforms with large amounts of genre labels provided by their
      users for music recordings (tracks). We have automatically inferred a genre/subgenre taxonomy and annotations from these labels.

    For details on format and contents, please refer to the data webpage.

    Note, that the AllMusic ground-truth annotations are distributed separately at https://zenodo.org/record/2554044.

    If you use the MediaEval AcousticBrainz Genre dataset or part of it, please cite our ISMIR 2019 overview paper:

    .. code-block:: latex

        Bogdanov, D., Porter A., Schreiber H., Urbano J., & Oramas S. (2019).
        The AcousticBrainz Genre Dataset: Multi-Source, Multi-Level, Multi-Label, and Large-Scale.
        20th International Society for Music Information Retrieval Conference (ISMIR 2019).

    This work is partially supported by the European Union’s Horizon 2020 research and innovation programme under
    grant agreement No 688382 AudioCommons.

* **License:** This dataset is composed of 4 subdatasets. Three of them are Creative Commons Attribution Non Commercial Share Alike 4.0 International and the other one is non-comercial. Details about which license correspond to each subdataset can be found in the following websites: * https://zenodo.org/record/2553414#.X_nxnOn7RUI * https://zenodo.org/record/2554044#.X_nw2en7RUI
* **Downloadable Remotes:** ``validation-01``, ``validation-89``, ``train-01``, ``train-23``, ``train-45``, ``train-67``, ``train-89``, ``train-ab``, ``train-cd``, ``train-ef``
* **YAML File:** :download:`acousticbrainz_genre.yaml<../dataset_yamls/acousticbrainz_genre.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{bogdanov2019acousticbrainz,
        title={The AcousticBrainz genre dataset: Multi-source, multi-level, multi-label, and large-scale},
        author={Bogdanov, Dmitry and Porter, Alastair and Schreiber, Hendrik and Urbano, Juli{'a}n and Oramas, Sergio},
        booktitle={Proceedings of the 20th Conference of the International Society for Music Information Retrieval (ISMIR 2019): 2019 Nov 4-8; Delft, The Netherlands.[Canada]: ISMIR; 2019.},
        year={2019},
        organization={International Society for Music Information Retrieval (ISMIR)}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/acousticbrainz_genre.yaml
      :language: yaml

baf
---


* **Annotations:** ``EventDataExtended``


**About this dataset:**
   
BAF dataset is only available upon request. To download the audio request
access in this link: https://doi.org/10.5281/zenodo.6868083. Then unzip the
audio into the baf general dataset folder for the rest of annotations and
files. Please include, in the justification field, your academic
affiliation (if you have one) and a brief description of your research
topics and why you would like to use this dataset.

Overview

Broadcast Audio Fingerprinting dataset is an open, available upon request,
annotated dataset for the task of music monitoring in broadcast. It
contains 2,000 tracks from Epidemic Sound's private catalogue as reference
tracks that represent 74 hours. As queries, it contains over 57 hours of TV
broadcast audio from 23 countries and 203 channels distributed with 3,425
one-min audio excerpts.

It has been annotated by six annotators in total and each query has been
cross-annotated by three of them obtaining high inter-annotator agreement
percentages, which validates the annotation methodology and ensures the
reliability of the annotations.

Purpose of the dataset

This dataset aims to become the standard dataset to evaluate Audio
Fingerprinting algorithms since it's built on real data, without the use of
any data-augmentation techniques. It is also the first dataset to address
background music fingerprinting, which is a real problem in royalties
distribution.

Dataset use

This dataset is available for conducting non-commercial research related to
audio analysis. It shall not be used for music generation or music
synthesis.

About the data

- Sampling frequency: 8 kHz
- Bit-depth: 16 bit
- Number of channels: 1
- Encoding: pcm_s16le
- Audio format: .wav

Annotations mark which tracks sound (either in foreground or background) in
each query (if any) and also the specific times where it starts and ends
sound in the query. Note that there are 88 queries that doesn't have any
matches/annotations .

For more information check the dedicated Github repository:
https://github.com/guillemcortes/baf-dataset and the dataset datasheet
included in the files.

Ownership of the data

Next, we specify the ownership of all the data included in BAF: Broadcast
Audio Fingerprinting dataset. For licensing information, please refer to
the “License” section.

Reference tracks

The reference tracks are owned by Epidemic Sound AB, which has given a
worldwide, revocable, non-exclusive, royalty-free licence to use and
reproduce this data collection consisting of 2,000 low-quality monophonic
8kHz downsampled audio recordings.

Query tracks

The query tracks come from publicly available TV broadcast emissions so the
ownership of each recording belongs to the channel that emitted the
content. We publish them under the right of quotation provided by the Berne
Convention.

Annotations

Guillem Cortès together with Alex Ciurana and Emilio Molina from BMAT Music
Licensing S.L. have managed the annotation therefore the annotations belong
to BMAT.

Accessing the dataset

The dataset is available upon request. Please include, in the justification
field, your academic affiliation (if you have one) and a brief description
of your research topics and why you would like to use this dataset. Bear in
mind that this information is important for the evaluation of every access
request.

License

.. code-block:: latex

    Given the different ownership of the elements of the dataset, the
    dataset is licensed under the following conditions:
        * User's access request
        * Research only, non-commercial purposes
        * No adaptations nor derivative works
        * Attribution to Epidemic Sound and the authors as it is indicated
            in the ”citation” section.

Acknowledgments

With the support of Ministerio de Ciencia Innovación y universidades
through Retos-Colaboración call, reference: RTC2019-007248-7, and also with
the support of the Industrial Doctorates Plan of the Secretariat of
Universities and Research of the Department of Business and Knowledge of
the Generalitat de Catalunya. Reference: DI46-2020.

* **License:** Given the different ownership of the elements of the dataset, the dataset is licensed under the following conditions: * User's access request * Research only, non-commercial purposes * No adaptations nor derivative works * Attribution to Epidemic Sound and the authors as it is indicated in the ”citation” section.
* **Downloadable Remotes:** *No direct download available*
* **YAML File:** :download:`baf.yaml<../dataset_yamls/baf.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   BAF dataset is only available upon request. To download the audio request access in this link: https://doi.org/10.5281/zenodo.6868083. Then unzip the audio into the baf general dataset folder for the rest of annotations and files. Please include, in the justification field, your academic affiliation (if you have one) and a brief description of your research topics and why you would like to use this dataset.

   ::

       baf/
       ├── baf_datasheet.pdf
       ├── annotations.csv
       ├── changelog.md
       ├── cross_annotations.csv
       ├── queries_info.csv
       ├── queries
       │   ├── query_0001.wav
       │   ├── query_0002.wav
       │   ├── …
       │   └── query_3425.wav
       ├── queries_info.csv
       └── references
           ├── ref_0001.wav
           ├── ref_0002.wav
           ├── …
           └── ref_2000.wav

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{cortes2022BAF,
        author       = {Guillem Cortès and
                        Alex Ciurana and
                        Emilio Molina and
                        Marius Miron and
                        Owen Meyers and
                        Joren Six and
                        Xavier Serra},
        title        = {BAF: An audio fingerprinting dataset for broadcast monitoring},
        booktitle    = {Proceedings of the 23rd International Society for Music Information Retrieval Conference},
        year         = 2022,
        pages        = {908-916},
        publisher    = {ISMIR},
        address      = {Bengaluru, India},
        month        = dec,
        venue        = {Bengaluru, India},
        doi          = {10.5281/zenodo.7316812},
        url          = {https://doi.org/10.5281/zenodo.7372162}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/baf.yaml
      :language: yaml

ballroom
--------


* **Annotations:** ``BeatData``, ``TempoData``


**About this dataset:**
   
The Ballroom Rhythm Dataset is a comprehensive collection of rhythm annotations for ballroom dance music. This dataset is designed for tasks such as beat tracking, rhythm analysis, and tempo estimation in ballroom dance music. It includes annotations for beats and bars corresponding to different dance styles within the ballroom genre.

**Dataset Overview:**

The dataset offers beat and bar annotations for various ballroom dance styles, such as Waltz, Tango, Viennese Waltz, Slow Foxtrot, Quickstep, Samba, Cha-Cha-Cha, Rumba, Paso Doble, and Jive. These annotations are provided in a format that includes beat time in seconds and beat ID, facilitating precise rhythm analysis.

**Beat and Bar Annotations:**

The beat annotations are structured as `.beats` files, where each line represents a beat with its timestamp and beat ID. For example, a line `9.430022675 3` indicates that the third beat of a bar is located at 9.43 seconds. This format is particularly useful for identifying downbeats, as they correspond to beats with ID = 1.

**Annotation Methodology:**

The dataset's annotations are based on the tempo guidelines of each ballroom dance style. Initial annotations were generated using a beat tracker, and then manually adjusted for accuracy. This method ensures that the annotations reflect the characteristic rhythms of each dance style.

**Applications:**

The Ballroom Rhythm Dataset is ideal for developing and testing algorithms for beat tracking, tempo estimation, and rhythm analysis in ballroom dance music. It can also be used for educational purposes, offering insights into the rhythmic structures of various ballroom dance styles.

**Acknowledgments and References:**

This dataset was created with the collaboration of experts in ballroom dance music. We extend our gratitude to those who contributed their knowledge and expertise to this project. For detailed information on the dataset and its creation, please refer to the associated research papers and documentation.

[1] Gouyon F., A. Klapuri, S. Dixon, M. Alonso, G. Tzanetakis, C. Uhle, and P. Cano. An experimental comparison of audio tempo induction algorithms. Transactions on Audio, Speech and Language Processing 14(5), pp.1832-1844, 2006.

[2] Böck, S., and M. Schedl. Enhanced beat tracking with context-aware neural networks. In Proceedings of the International Conference on Digital Audio Effects (DAFX), 2010.

[3] Dixon, S., F. Gouyon & G. Widmer. Towards Characterisation of Music via Rhythmic Patterns. In Proceedings of the 5th International Society for Music Information Retrieval Conference (ISMIR). 2004.

* **License:** Creative Commons Attribution Non Commercial Share Alike 4.0 International.
* **Downloadable Remotes:** ``audio``, ``tempo``, ``beats``
* **YAML File:** :download:`ballroom.yaml<../dataset_yamls/ballroom.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @ARTICLE{1678001,
          author={Gouyon, F. and Klapuri, A. and Dixon, S. and Alonso, M. and Tzanetakis, G. and Uhle, C. and Cano, P.},
          journal={IEEE Transactions on Audio, Speech, and Language Processing}, 
          title={An experimental comparison of audio tempo induction algorithms}, 
          year={2006},
          volume={14},
          number={5},
          pages={1832-1844},
          doi={10.1109/TSA.2005.858509}}

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/ballroom.yaml
      :language: yaml

beatles
-------


* **Annotations:** ``BeatData``, ``SectionData``, ``KeyData``, ``ChordData``


**About this dataset:**
   
The Beatles Dataset includes beat and metric position, chord, key, and segmentation
annotations for 179 Beatles songs. Details can be found in https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.207.4076&rep=rep1&type=pdf and
http://isophonics.net/content/reference-annotations-beatles.

* **License:** Unfortunately we couldn't find the license information for the Beatles dataset.
* **Downloadable Remotes:** ``annotations``
* **YAML File:** :download:`beatles.yaml<../dataset_yamls/beatles.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   Unfortunately the audio files of the Beatles dataset are not available

   ::

       for download. If you have the Beatles dataset, place the contents into
       a folder called Beatles with the following structure:
           > Beatles/
               > annotations/
               > audio/
       and copy the Beatles folder to {}

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{mauch2009beatles,
          title={OMRAS2 metadata project 2009},
          author={Mauch, Matthias and Cannam, Chris and Davies, Matthew and Dixon, Simon and Harte,
          Christopher and Kolozali, Sefki and Tidhar, Dan and Sandler, Mark},
          booktitle={12th International Society for Music Information Retrieval Conference},
          year={2009},
          series = {ISMIR}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/beatles.yaml
      :language: yaml

beatport_key
------------


* **Annotations:** ``TempoData``, ``KeyData``


**About this dataset:**
   
The Beatport EDM Key Dataset includes 1486 two-minute sound excerpts from various EDM
subgenres, annotated with single-key labels, comments and confidence levels generously provided by Eduard Mas Marín,
and thoroughly revised and expanded by Ángel Faraldo.

The original audio samples belong to online audio snippets from Beatport, an online music store for DJ's and
Electronic Dance Music Producers (<http:\www.beatport.com>). If this dataset were used in further research,
we would appreciate the citation of the current DOI (10.5281/zenodo.1101082) and the following doctoral dissertation,
where a detailed description of the properties of this dataset can be found:

.. code-block:: latex

    Ángel Faraldo (2017). Tonality Estimation in Electronic Dance Music: A Computational and Musically Informed
    Examination. PhD Thesis. Universitat Pompeu Fabra, Barcelona.

This dataset is mainly intended to assess the performance of computational key estimation algorithms in electronic
dance music subgenres.

Data License: Creative Commons Attribution Share Alike 4.0 International

* **License:** Creative Commons Attribution Share Alike 4.0 International.
* **Downloadable Remotes:** ``keys``, ``metadata``, ``audio``
* **YAML File:** :download:`beatport_key.yaml<../dataset_yamls/beatport_key.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @phdthesis {3897,
          title = {Tonality Estimation in Electronic Dance Music: A Computational and Musically Informed Examination},
          year = {2018},
          month = {03/2018},
          pages = {234},
          school = {Universitat Pompeu Fabra},
          address = {Barcelona},
          abstract = {This dissertation revolves around the task of computational key estimation in electronic dance music, upon which three interrelated operations are performed. First, I attempt to detect possible misconceptions within the task, which is typically accomplished with a tonal vocabulary overly centred in Western classical tonality, reduced to a binary major/minor model which might not accomodate popular music styles. Second, I present a study of tonal practises in electronic dance music, developed hand in hand with the curation of a corpus of over 2,000 audio excerpts, including various subgenres and degrees of complexity. Based on this corpus, I propose the creation of more open-ended key labels, accounting for other modal practises and ambivalent tonal configurations. Last, I describe my own key finding methods, adapting existing models to the musical idiosyncrasies and tonal distributions of electronic dance music, with new statistical key profiles derived from the newly created corpus.},
          keywords = {EDM, Electronic Dance Music, Key Estimation, mir, music information retrieval, tonality},
          url = {https://doi.org/10.5281/zenodo.1154586},
          author = {{'A}ngel Faraldo}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/beatport_key.yaml
      :language: yaml

billboard
---------


* **Annotations:** ``SectionData``, ``ChordData``


**About this dataset:**
   
The McGill Billboard dataset includes annotations and audio features corresponding to 890 slots from a random sample of Billboard chart slots.
It also includes metadata like Billboard chart date, peak rank, artist name, etc.
Details can be found at https://ddmal.music.mcgill.ca/research/The_McGill_Billboard_Project_(Chord_Analysis_Dataset)

* **License:** This data is released under a Creative Commons 0 license, effectively dedicating it to the public domain. More information about this dedication and your rights, please see the details here: http://creativecommons.org/publicdomain/zero/1.0/ and http://creativecommons.org/publicdomain/zero/1.0/legalcode.
* **Downloadable Remotes:** ``metadata``, ``annotation_salami``, ``annotation_lab``, ``annotation_mirex13``, ``annotation_chordino``
* **YAML File:** :download:`billboard.yaml<../dataset_yamls/billboard.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{burgoyne_billboard,
      author = {Burgoyne, John Ashley and Wild, Jonathan and Fujinaga, Ichiro},
      year = {2011},
      title = {An {Expert} {Ground} {Truth} {Set} for {Audio} {Chord} {Recognition} and {Music} {Analysis}},
      booktitle={Proceedings of the 12th International Society for Music Information Retrieval Conference, ISMIR}
      }

      @phdthesis{phdthesis,
        author       = {Burgoyne, John Ashley}, 
        title        = {Stochastic {Processes} and {Database}-{Driven} {Musicology}},
        school       = {McGill University, Montréal, Québec},
        year         = 2012,
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/billboard.yaml
      :language: yaml

brid
----


* **Annotations:** ``BeatData``, ``TempoData``


**About this dataset:**
   
The Brazilian Rhythmic Instruments Dataset (BRID) [1] is a valuable resource assembled for research in Music Information Retrieval (MIR). This dataset is designed to facilitate research in computational rhythm analysis, beat tracking, and rhythmic pattern recognition, particularly in the context of Brazilian music. BRID offers a comprehensive collection of solo and multiple-instrument recordings, featuring 10 different instrument classes playing in 5 main rhythm classes from Brazilian music, including samba, partido alto, samba-enredo, capoeira, and marcha.

**Dataset Overview:**

BRID comprises a total of 367 tracks, averaging about 30 seconds each, amounting to approximately 2 hours and 57 minutes of music. These tracks include recordings of various Brazilian instruments, played in different Brazilian rhythmic styles.

**Instruments and Rhythms:**

The recorded instruments in BRID represent the most significant instruments in Brazilian music, particularly samba. Ten different instrument classes were chosen, including agogoˆ, caixa (snare drum), cu ́ıca, pandeiro (frame drum), reco-reco, repique, shaker, surdo, tamborim, and tanta ̃. To ensure diversity in sound, these instruments vary in terms of shape, size, material, pitch/tuning, and the way they are struck, resulting in 32 variations.

**Rhythms in BRID:**

BRID features various Brazilian rhythmic styles, with a focus on samba and its sub-genres, samba-enredo and partido alto. Additionally, the dataset includes rhythms such as marcha, capoeira, and a few tracks of baia ̃o and maxixe styles. The dataset provides a faithful representation of each rhythm, all of which are in duple meter.

**Dataset Recording:**

All recordings in BRID were made in a professional recording studio in Manaus, Brazil, between October and November.

**Applications:**

The Brazilian Rhythmic Instruments Dataset (BRID) serves as a crucial resource for researchers in the field of Music Information Retrieval (MIR) and rhythm analysis. It showcases the richness of Brazilian rhythmic content and highlights the challenges that non-Western music presents to traditional computational musicology research. Researchers can use BRID to develop more robust MIR tools tailored to Brazilian music.

**Acknowledgments:**

We extend our gratitude to the creators of BRID for providing this valuable dataset for research purposes in the field of MIR. Additionally, we acknowledge the authors of the following research paper for their contributions to the dataset and experiments:

[1] Lucas Maia, Pedro D. de Tomaz Júnior, Magdalena Fuentes, Martín Rocamora, Luiz W. P. Biscainho, Maurício V. M. Costa, and Sara Cohen. "A Novel Dataset of Brazilian Rhythmic Instruments and Some Experiments in Computational Rhythm Analysis." In Proceedings of the {CONGRESO LATINOAMERICANO DE LA AES}, 2018. [Link](https://api.semanticscholar.org/CorpusID:204762166)

For more details on the dataset and its applications, please refer to the associated research papers and documentation.

* **License:** Creative Commons Attribution Non Commercial Share Alike 4.0 International.
* **Downloadable Remotes:** ``annotations``, ``audio``
* **YAML File:** :download:`brid.yaml<../dataset_yamls/brid.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{Maia2018AND,
        title={A Novel Dataset of Brazilian Rhythmic Instruments and Some Experiments in Computational Rhythm Analysis},
        author={Lucas Maia and Pedro D. de Tomaz J{'u}nior and Magdalena Fuentes and Mart{'i}n Rocamora and Luiz W. P. Biscainho and Maur{'i}cio V. M. Costa and Sara Cohen},
        year={2018},
        url={https://api.semanticscholar.org/CorpusID:204762166}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/brid.yaml
      :language: yaml

candombe
--------


* **Annotations:** ``BeatData``


**About this dataset:**
   
This is a dataset of Candombe recordings with annotated beats and downbeats, totaling over 2 hours of audio.
It comprises 35 complete performances by renowned players, in groups of three to five drums.
Recording sessions were conducted in studio, in the context of musicological research over the past two decades.
A total of 26 tambor players took part, belonging to different generations and representing all the important traditional Candombe styles.
The audio files are stereo with a sampling rate of 44.1 kHz and 16-bit precision.
The location of beats and downbeats was annotated by an expert, adding to more than 4700 downbeats.

The audio is provided as .flac files and the annotations as .csv files.
The values in the first column of the csv file are the time instants of the beats.
The numbers on the second column indicate both the bar number and the beat number within the bar.
For instance, 1.1, 1.2, 1.3 and 1.4 are the four beats of the first bar. Hence, each label ending with .1 indicates a downbeat.
Another set of annotations are provided as .beats files in which the bar numbers are removed.

* **License:** Creative Commons Attribution 4.0 International
* **Downloadable Remotes:** ``annotations``, ``audio``
* **YAML File:** :download:`candombe.yaml<../dataset_yamls/candombe.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{Nunes2015,
          author = {Leonardo Nunes and Martín Rocamora and Luis Jure and Luiz W. P. Biscainho},
          title = {{Beat and Downbeat Tracking Based on Rhythmic Patterns Applied to the Uruguayan Candombe Drumming}},
          booktitle = {Proceedings of the 16th International Society for Music Information Retrieval Conference (ISMIR 2015)},
          month = {Oct.},
          address = {Málaga, Spain},
          pages = {264--270},
          year = {2015}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/candombe.yaml
      :language: yaml

cante100
--------


* **Annotations:** ``F0Data``, ``NoteData``


**About this dataset:**
   
The cante100 dataset contains 100 tracks taken from the COFLA corpus. We defined 10 style
families of which 10 tracks each are included. Apart from the style family, we manually
annotated the sections of the track in which the vocals are present. In addition, we
provide a number of low-level descriptors and the fundamental frequency corresponding to
the predominant melody for each track. The meta-information includes editoral meta-data
and the musicBrainz ID.

Total tracks: 100

cante100 audio is only available upon request. To download the audio request access in
this link: https://zenodo.org/record/1324183. Then
unzip the audio into the cante100 general dataset folder for the rest of annotations
and files.

Audio specifications:

- Sampling frequency: 44.1 kHz
- Bit-depth: 16 bit
- Audio format: .mp3

cante100 dataset has spectrogram available, in csv format. spectrogram is available to download
without request needed, so at first instance, cante100 loader uses the spectrogram of the tracks.

The available annotations are:

- F0 (predominant melody)
- Automatic transcription of notes (of singing voice)

CANTE100 LICENSE (COPIED FROM ZENODO PAGE)

.. code-block:: latex

    The provided datasets are offered free of charge for internal non-commercial use.
    We do not grant any rights for redistribution or modification. All data collections were gathered
    by the COFLA team.
    © COFLA 2015. All rights reserved.

For more details, please visit: http://www.cofla-project.com/?page_id=134

* **License:** The provided datasets are offered free of charge for internal non-commercial use. We do not grant any rights for redistribution or modification. All data collections were gathered by the COFLA team. COFLA 2015. All rights reserved.
* **Downloadable Remotes:** ``spectrogram``, ``melody``, ``notes``, ``metadata``, ``README``
* **YAML File:** :download:`cante100.yaml<../dataset_yamls/cante100.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   This loader is designed to load the spectrum, as it is available for download.

   ::

           However, the loader supports audio as well. Unfortunately the audio files of the
           cante100 dataset are not available for free download, but upon request. However,
           you can request de audio in both links here:
           ==> http://www.cofla-project.com/?page_id=208
           ==> https://zenodo.org/record/1324183
           Then, locate the downloaded the cante100audio folder like this:
               > cante100/
                   > cante100_spectrum/
                   ... (rest of the annotation folders)
                   > cante100audio/
           Remember to locate the cante100 folder to {}

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @dataset{nadine_kroher_2018_1322542,
        author       = {Nadine Kroher and
                        José Miguel Díaz-Báñez and
                        Joaquin Mora and
                        Emilia Gómez},
        title        = {cante100 Metadata},
        month        = jul,
        year         = 2018,
        publisher    = {Zenodo},
        version      = {1.0},
        doi          = {10.5281/zenodo.1322542},
        url          = {https://doi.org/10.5281/zenodo.1322542}
      },
      @dataset{nadine_kroher_2018_1324183,
        author       = {Nadine Kroher and
                        José Miguel Díaz-Báñez and
                        Joaquin Mora and
                        Emilia Gómez},
        title        = {cante100 Audio},
        month        = jul,
        year         = 2018,
        publisher    = {Zenodo},
        version      = {1.0},
        doi          = {10.5281/zenodo.1324183},
        url          = {https://doi.org/10.5281/zenodo.1324183}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/cante100.yaml
      :language: yaml

compmusic_carnatic_rhythm
-------------------------


* **Annotations:** ``BeatData``, ``Instrument``


**About this dataset:**
   
CompMusic Carnatic Rhythm Dataset Loader


    CompMusic Carnatic Rhythm Dataset is a rhythm annotated test corpus for automatic rhythm analysis tasks in Carnatic Music.
    The collection consists of audio excerpts from the CompMusic Carnatic research corpus, manually annotated time aligned markers
    indicating the progression through the taala cycle, and the associated taala related metadata. A brief description of the dataset
    is provided below. For a brief overview and audio examples of taalas in Carnatic music, please see:
    http://compmusic.upf.edu/examples-taala-carnatic

    The dataset contains the following data:

    **AUDIO:** The pieces are chosen from the CompMusic Carnatic music collection. The pieces were chosen in four popular taalas of
    Carnatic music, which encompasses a majority of Carnatic music. The pieces were chosen include a mix of vocal and instrumental recordings,
    new and old recordings, and to span a wide variety of forms. All pieces have a percussion accompaniment, predominantly Mridangam. The
    excerpts are full length pieces or a part of the full length pieces. There are also several different pieces by the same artist (or release
    group), and multiple instances of the same composition rendered by different artists. Each piece is uniquely identified using the MBID of the
    recording. The pieces are stereo, 160 kbps, mp3 files sampled at 44.1 kHz.

    **SAMA AND BEATS:** The primary annotations are audio synchronized time-stamps indicating the different metrical positions in the taala cycle.
    The annotations were created using Sonic Visualizer by tapping to music and manually correcting the taps. Each annotation has a time-stamp and
    an associated numeric label that indicates the position of the beat marker in the taala cycle. The marked positions in the taala cycle are shown
    with numbers, along with the corresponding label used. In each case, the sama (the start of the cycle, analogous to the downbeat) are indicated
    using the numeral 1.

    **METADATA:** For each excerpt, the taala of the piece, edupu (offset of the start of the piece, relative to the sama, measured in aksharas)
    of the composition, and the kalai (the cycle length scaling factor) are recorded. Each excerpt can be uniquely identified and located with the
    MBID of the recording, and the relative start and end times of the excerpt within the whole recording. A separate 5 digit taala based unique ID
    is also provided for each excerpt as a double check. The artist, release, the lead instrument, and the raaga of the piece are additional
    editorial metadata obtained from the release. A flag indicates if the excerpt is a full piece or only a part of a full piece. There are optional
    comments on audio quality and annotation specifics.

    Possible uses of the dataset: Possible tasks where the dataset can be used include taala, sama and beat tracking, tempo estimation and tracking,
    taala recognition, rhythm based segmentation of musical audio, structural segmentation, audio to score/lyrics alignment, and rhythmic pattern
    discovery.

    Dataset organization: The dataset consists of audio, annotations, an accompanying spreadsheet providing additional metadata. For a detailed
    description of the organization, please see the README in the dataset.

    Data Subset: A subset of this dataset consisting of 118 two minute excerpts of music is also available. The content in the subset is equaivalent
    and is separately distributed for a quicker testing of algorithms and approaches.

    The annotations files of this dataset are shared with the following license:
    Creative Commons Attribution Non Commercial Share Alike 4.0 International

* **License:** Creative Commons Attribution Non Commercial Share Alike 4.0 International.
* **Downloadable Remotes:** *No direct download available*
* **YAML File:** :download:`compmusic_carnatic_rhythm.yaml<../dataset_yamls/compmusic_carnatic_rhythm.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   The files of this dataset are shared under request. Please go to: https://zenodo.org/record/1264394 and request access, stating
       the research-related use you will give to the dataset. Once the access is granted (it may take, at most, one day or two), please download 
       the dataset with the provided Zenodo link and uncompress the two zip files: CMR_full_dataset_1.0.zip and CMR_subset_1.0.zip. You don't need 
       to re-arrange or change the folder structure of these two versions, the dataloader is designed to work with the provided file organization. 
       Therefore, simply uncompress and store the datasets to a desired location, and use such location to initialize the dataset as follows: 
    
       compmusic_carnatic_rhythm = mirdata.initialize("compmusic_carnatic_rhythm", data_home="/path/to/home/folder/of/dataset").

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @article{srinivasamurthy_2014,
        title={Particle Filters for Efficient Meter Tracking with Dynamic Bayesian Networks},
        author={Srinivasamurthy, A. and Holzapfel, A. and Cemgil, A. T. and Serra, X.},
        journal={In Proceedings of the 16th International Society for Music Information Retrieval Conference (ISMIR)},
        pages={197--203}
        year={2015}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/compmusic_carnatic_rhythm.yaml
      :language: yaml

compmusic_carnatic_varnam
-------------------------


* **Annotations:** ``SectionData``, ``KeyData``


**About this dataset:**
   
CompMusic Carnatic Varnam Dataset Loader


    Carnatic varnam dataset is a collection of 28 solo vocal recordings, recorded for our research on intonation
    analysis of Carnatic raagas. The collection has the audio recordings, taala cycle annotations and notations in a
    machine readable format.

    **Audio music content**
    They feature 7 varnams in 7 rāgas sung by 5 young professional singers who received training for more than 15 years.
    They are all set to Adi taala. Measuring the intonation variations require absolutely clean pitch contours. For
    this, all the varṇaṁs are recorded without accompanying instruments, except the drone.

    **Taala annotations**
    The recordings are annotated with taala cycles, each annotation marking the starting of a cycle. We have later
    automatically divided each cycle into 8 equal parts. The annotations are made available as sonic visualizer
    annotation layers. Each annotation is of the format m.n where m is the cycle number and n is the division within
    the cycle. All m.1 annotations are manually done, whereas m.[2-8] are automatically labelled.

    **Notations**
    The notations for 7 varnams are procured from an archive curated by Shivkumar, in word document format. They are
    manually converted to a machine readable format (yaml). Each file is essentially a dictionary with section names
    of the composition as keys. Each section is represented as a list of cycles. Each cycle in turn has a list of
    divisions.

    **Sections**
    The notation is given a single time per section, however, to align the svaras with the tala annotations, structure
    information is given. The structure is given in yaml format, specifying the order of the sections, and how many svaras
    are sung per each tala tick. Broadly, there are just two only cases, 2 svaras per tick, and 4 svaras per tick.
    The structure information has been added in the 1.1 version of the dataset.

    **Possible uses of the dataset**
    The distinct advantage of this dataset is the free availability of the audio content. Along with the annotations,
    it can be used for melodic analyses: characterizing intonation, motif discovery and tonic identification. The
    availability of a machine readable notation files allows the dataset to be used for audio-score alignment.

* **License:** Creative Commons Attribution Non Commercial No Derivatives 4.0 International
* **Downloadable Remotes:** ``all``
* **YAML File:** :download:`compmusic_carnatic_varnam.yaml<../dataset_yamls/compmusic_carnatic_varnam.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @dataset{koduri_g_k_2014_1257118,
        author       = {Koduri, G. K. and
                        Ishwar, V. and
                        Serrà, J. and
                        Serra, X.},
        title        = {Carnatic Varnam Dataset},
        month        = feb,
        year         = 2014,
        publisher    = {Zenodo},
        version      = {1.0},
        doi          = {10.5281/zenodo.1257118},
        url          = {https://doi.org/10.5281/zenodo.1257118}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/compmusic_carnatic_varnam.yaml
      :language: yaml

compmusic_hindustani_rhythm
---------------------------


* **Annotations:** ``BeatData``, ``Instrument``


**About this dataset:**
   
CompMusic Hindustani Rhythm Dataset Loader


    CompMusic Hindustani Rhythm Dataset is a rhythm annotated test corpus for automatic rhythm analysis tasks in Hindustani Music.
    The collection consists of audio excerpts from the CompMusic Hindustani research corpus, manually annotated time aligned markers
    indicating the progression through the taal cycle, and the associated taal related metadata. A brief description of the dataset
    is provided below.

    For a brief overview and audio examples of taals in Hindustani music, please see: http://compmusic.upf.edu/examples-taal-hindustani

    The dataset contains the following data:

    **AUDIO:** The pieces are chosen from the CompMusic Hindustani music collection. The pieces were chosen in four popular taals of Hindustani music,
    which encompasses a majority of Hindustani khyal music. The pieces were chosen include a mix of vocal and instrumental recordings, new and old
    recordings, and to span three lays. For each taal, there are pieces in dhrut (fast), madhya (medium) and vilambit (slow) lays (tempo class). All
    pieces have Tabla as the percussion accompaniment. The excerpts are two minutes long. Each piece is uniquely identified using the MBID of the recording.
    The pieces are stereo, 160 kbps, mp3 files sampled at 44.1 kHz. The audio is also available as wav files for experiments.

    **SAM, VIBHAAG AND THE MAATRAS:** The primary annotations are audio synchronized time-stamps indicating the different metrical positions in the taal cycle.
    The sam and matras of the cycle are annotated. The annotations were created using Sonic Visualizer by tapping to music and manually correcting the taps.
    Each annotation has a time-stamp and an associated numeric label that indicates the position of the beat marker in the taala cycle. The annotations and the
    associated metadata have been verified for correctness and completeness by a professional Hindustani musician and musicologist. The long thick lines show
    vibhaag boundaries. The numerals indicate the matra number in cycle. In each case, the sam (the start of the cycle, analogous to the downbeat) are indicated
    using the numeral 1.

    **METADATA:** For each excerpt, the taal and the lay of the piece are recorded. Each excerpt can be uniquely identified and located with the MBID of the
    recording, and the relative start and end times of the excerpt within the whole recording. A separate 5 digit taal based unique ID is also provided for each
    excerpt as a double check. The artist, release, the lead instrument, and the raag of the piece are additional editorial metadata obtained from the release.
    There are optional comments on audio quality and annotation specifics.

    The dataset consists of excerpts with a wide tempo range from 10 MPM (matras per minute) to 370 MPM. To study any effects of the tempo class, the full dataset
    (HMDf) is also divided into two other subsets - the long cycle subset (HMDl) consisting of vilambit (slow) pieces with a median tempo between 10-60 MPM, and the
    short cycle subset (HMDs) with madhyalay (medium, 60-150 MPM) and the drut lay (fast, 150+ MPM).

    **Possible uses of the dataset:** Possible tasks where the dataset can be used include taal, sama and beat tracking, tempo estimation and tracking, taal recognition,
    rhythm based segmentation of musical audio, audio to score/lyrics alignment, and rhythmic pattern discovery.

    **Dataset organization:** The dataset consists of audio, annotations, an accompanying spreadsheet providing additional metadata, a MAT-file that has identical
    information as the spreadsheet, and a dataset description document.

    The annotations files of this dataset are shared with the following license: Creative Commons Attribution Non Commercial Share Alike 4.0 International

* **License:** Creative Commons Attribution Non Commercial Share Alike 4.0 International.
* **Downloadable Remotes:** *No direct download available*
* **YAML File:** :download:`compmusic_hindustani_rhythm.yaml<../dataset_yamls/compmusic_hindustani_rhythm.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   The files of this dataset are shared under request. Please go to: https://zenodo.org/record/1264742 and request access, stating
       the research-related use you will give to the dataset. Once the access is granted (it may take, at most, one day or two), please download 
       the dataset with the provided Zenodo link and uncompress and store the datasets to a desired location, and use such location to initialize the 
       dataset as follows: compmusic_hindustani_rhythm = mirdata.initialize("compmusic_hindustani_rhythm", data_home="/path/to/home/folder/of/dataset").

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{Srinivasamurthy2016,
          author = {Srinivasamurthy, Ajay and Holzapfel, Andre and Cemgil, Ali and Serra, Xavier},
          year = {2016},
          month = {03},
          pages = {76-80},
          title = {A generalized Bayesian model for tracking long metrical cycles in acoustic music signals},
          doi = {10.1109/ICASSP.2016.7471640}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/compmusic_hindustani_rhythm.yaml
      :language: yaml

compmusic_iamms
---------------


* **Annotations:** ``F0Data``, ``SectionData``, ``KeyData``


**About this dataset:**
   
This dataset comprises audio excerpts and manually done annotations of the melodic phrases in Carnatic and Hindustani music.
This dataset can be used to develop and evaluate approaches for computing melodic similarity between short-time melodic patterns in Indian art music.

The dataset contains the following manual annotations referring to audio files:

- Section annotations, both original and finetuned, stored as start and end timestamps together with the phrase ID of the section (similar melodic phrases have the same ID).
- Nyas event annotations stored as start and end timestamps.
- Audio features automatically extracted and stored: pitch and tonic.
- The annotations are stored in files with song identifier as the filename and file extension:
    - Section annotations: `.anot` and `.anotEdit`
    - Nyas annotations: `.flatSegNyas`
    - Pitch annotations: `.pitch`, `.pitchSilIntrpPP`, `tpe` and `tpe5msSilIntrpPP`
    - Tonic: `.tonic` and `.tonic`

The dataset contains a total of 32 tracks.

The files of this dataset are shared with the following license:
Creative Commons Attribution Non Commercial Share Alike 4.0 International

Dataset compiled by: Gulati, S., Serrà, J., and Serra, X.

For more information about the dataset as well as IAM and annotations, please refer to:
https://zenodo.org/records/16631794, where a really detailed explanation of the data and annotations is published.

* **License:** Creative Commons Attribution Non Commercial Share Alike 4.0 International.
* **Downloadable Remotes:** ``all``
* **YAML File:** :download:`compmusic_iamms.yaml<../dataset_yamls/compmusic_iamms.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{gulati2015improving,
        author    = {Sankalp Gulati and Joan Serr{\`a} and Xavier Serra},
        title     = {Improving melodic similarity in Indian art music using culture-specific melodic characteristics},
        booktitle = {Proceedings of the 16th International Society for Music Information Retrieval Conference (ISMIR)},
        pages     = {680--686},
        year      = {2015},
        address   = {Malaga, Spain}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/compmusic_iamms.yaml
      :language: yaml

compmusic_indian_tonic
----------------------


* **Annotations:** ``KeyData``


**About this dataset:**
   
Indian Art Music Tonic Loader


    This loader includes a combination of six different datasets for the task of Indian Art Music tonic identification.

    These datasets comprise audio excerpts and manually done annotations of the tonic pitch of the lead artist for each audio excerpt.
    Each excerpt is accompanied by its associated editorial metadata. These datasets can be used to develop and evaluate computational
    approaches for automatic tonic identification in Indian art music. These datasets have been used in several articles mentioned below.
    A majority of These datasets come from the CompMusic corpora of Indian art music, for which each recording is associated with a MBID.
    Through the MBID other information can be obtained using the Dunya API.


    These six datasets are used for for the task of tonic identification for Indian Art Music, and can be used for a comparative evaluation.
    To the best of our knowledge these are the largest datasets available for tonic identification for Indian art  music. These datases vary
    in terms of the audio quality, recording period (decade), the number of recordings for Carnatic, Hindustani, male and female singers and
    instrumental and vocal excerpts.

    All the datasets (annotations) are version controlled. The audio files corresponding to these datsets are made available on request
    for only research purposes. See DOWNLOAD_INFO of this loader.

    The tonic annotations are availabe both in tsv and json format. The loader uses the JSON formatted annotations.

    .. code-block::

        'ID': {
            'artist': <name of the lead artist if available>,
            'filepath': <relative path to the audio file>,
            'gender': <gender of the lead singer if available>,
            'mbid': <musicbrainz id when available>,
            'tonic': <tonic in Hz>,
            'tradition': <Hindustani or Carnatic>,
            'type': <vocal or instrumental>
        }

    where keys of the main dictionary are the filepaths to the audio files (feature path is exactly the same with a different extension
    of the file name).

    Despite not being loaded in this dataloader, the dataset includes features, which may be integrated to the loader in future releases. However
    these features may be easily computed following the instructions in the related paper. See BIBTEX.

    There are a total of 2161 audio excerpts, and while the CM collection includes aproximately 50% Carnatic and 50% Hindustani recordings, IITM and
    IISc collections are 100% Carnatic music. The excerpts vary a lot in duration. See [this webpage](https://compmusic.upf.edu/iam-tonic-dataset)
    for a detailed overview of the datasets.

    If you have any questions or comments about the dataset, please feel free to email: [sankalp (dot) gulati (at) gmail (dot) com], or
    [sankalp (dot) gulati (at) upf (dot) edu].

* **License:** Creative Commons Attribution Non Commercial Share Alike 4.0 International.
* **Downloadable Remotes:** ``remote_data``
* **YAML File:** :download:`compmusic_indian_tonic.yaml<../dataset_yamls/compmusic_indian_tonic.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   The audio of this dataset is private, and it is only shared for research purposes. Please refer to:
       https://zenodo.org/record/7342372, request the audios clearly explaning why and how are you planning 
       to use it, and then simply move the "audio" folders to the respective center ID. An example here:
       take indian_art_music_tonic_1.0_audio/CM/audio and move it inside indian_art_music_tonic_1.0/CM, and so on.

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @article{Gulati2014,
          author = {Gulati, S. and Bellur, A. and Salamon, J. and Ranjani, H. G. and Ishwar, V. and Murthy, H. A. and Serra, X.},
          journal = {Journal of New Music Research},
          pages = {55--73},
          volume = {43},
          number = {01},
          title = {{Automatic Tonic Identification in Indian Art Music: Approaches and Evaluation}},
          year = {2014}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/compmusic_indian_tonic.yaml
      :language: yaml

compmusic_jingju_acappella
--------------------------


* **Annotations:** ``LyricData``


**About this dataset:**
   
Jingju A Cappella Singing Dataset Loader


    Description:
        This dataset is a collection of boundary annotations of a cappella singing performed by
        Beijing Opera (Jingju, 京剧) professional and amateur singers.

    Contents:
        1. wav.zip: audio files in .wav format, mono or stereo.
        2. pycode.zip: util code for parsing the .textgrid annotation
        3. catalogue*.csv: recording metadata, source separation recordings are not included.
        4. annotation_txt.zip: phrase, syllable and phoneme time boundaries (second) and labels in .txt format

    The annotation_txt.zip folder annotations are represented as follows:
        1. phrase_char: phrase-level time boundaries, labeled in Mandarin characters
        2. phrase: phrase-level time boundaries, labeled in Mandarin pinyin
        3. syllable: syllable-level time boundaries, labeled in Mandarin pinyin
        4. phoneme: phoneme-level time boundaries, labeled in X-SAMPA

    The boundaries (onset and offset) have been annotated hierarchically:
        1. phrase (line)
        2. syllable
        3. phoneme

    Annotation details:
        Singing units in pinyin and X-SAMPA have been annotated to a jingju a cappella singing audio dataset.

    Audio details:
        The corresponding audio files are the a cappella singing arias recordings, which are stereo or mono,
        sampled at 44.1 kHz, and stored as .wav files. The .wav files are recorded by two institutes: those file
        names ending with ‘qm’ are recorded by C4DM, Queen Mary University of London; others file names ending with
        ‘upf’ or ‘lon’ are recorded by MTG-UPF. Additionally, another collection of 15 clean singing recordings is
        included in this dataset. They are extracted from the commercial recordings which originally contains karaoke
        accompaniment and mixed versions.

    Additional details:
        Annotation format, units, parsing code and other information please refer to:
        https://github.com/MTG/jingjuPhonemeAnnotation

    License information:
        Textgrid annotations are licensed under Creative Commons Attribution-NonCommercial 4.0 International License.
        Wav audio ending with ‘upf’ or ‘lon’ is licensed under Creative Commons Attribution-NonCommercial 4.0 International.
        For the license of .wav audio ending with ‘qm’ from C4DM Queen Mary University of London, please refer to
        this page http://isophonics.org/SingingVoiceDataset

* **License:** audio files ending with upf or lon: Creative Commons Attribution Non-Commercial 4.0 International, audio files ending with qm: http://isophonics.org/SingingVoiceDataset
* **Downloadable Remotes:** ``annotation_txt``, ``catalogue_dan``, ``catalogue_laosheng``, ``wav``
* **YAML File:** :download:`compmusic_jingju_acappella.yaml<../dataset_yamls/compmusic_jingju_acappella.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @dataset{rong_gong_2018_1323561,
        author       = {Rong Gong and
                        Rafael Caro Repetto and
                        Yile Yang and
                        Xavier Serra},
        title        = {Jingju a cappella singing dataset part1},
        month        = jul,
        year         = 2018,
        publisher    = {Zenodo},
        version      = 7,
        doi          = {10.5281/zenodo.1323561},
        url          = {https://doi.org/10.5281/zenodo.1323561}
      }
      @article{black2014automatic,
        title={Automatic identification of emotional cues in Chinese opera singing},
        author={Black, Dawn AA and Li, Ma and Tian, Mi},
        journal={ICMPC, Seoul, South Korea},
        year={2014}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/compmusic_jingju_acappella.yaml
      :language: yaml

compmusic_otmm_makam
--------------------


* **Annotations:** ``F0Data``, ``KeyData``


**About this dataset:**
   
OTMM Makam Recognition Dataset Loader


    **NOTE**: From mirdata v0.3.8 on, the only version available of this dataset is dlfm2016-fix1, which is
    basically the same as dlfm2016, but with a few fixes in some annotations. The original dlfm2016 version
    is still available in mirdata versions <=0.3.7. Note that from dlfm2016 to dlfm2016-fix1, no new recordings
    or annotation were added, only a few annotation files were fixed.

    This dataset is designed to test makam recognition methodologies on Ottoman-Turkish makam music.
    It is composed of 50 recording from each of the 20 most common makams in CompMusic Project's Dunya Ottoman-Turkish
    Makam Music collection. Currently the dataset is the largest makam recognition dataset.

    The recordings are selected from commercial recordings carefully such that they cover diverse musical forms,
    vocal/instrumentation settings and recording qualities (e.g. historical recordings vs. contemporary recordings).
    Each recording in the dataset is identified by an 16-character long unique identifier called MBID, hosted in
    MusicBrainz. The makam and the tonic of each recording is annotated in the file annotations.json.

    The audio related data in the test dataset is organized by each makam in the folder data. Due to copyright reasons,
    we are unable to distribute the audio. Instead we provide the predominant melody of each recording, computed by a
    state-of-the-art predominant melody extraction algorithm optimized for OTMM culture. These features are saved as
    text files (with the paths data/[makam]/[mbid].pitch) of single column that contains the frequency values. The
    timestamps are removed to reduce the filesizes. The step size of the pitch track is 0.0029 seconds (an analysis
    window of 128 sample hop size of an mp3 with 44100 Hz sample rate), with which one can recompute the timestamps of
    samples.

    Moreover the metadata of each recording is available in the repository, crawled from MusicBrainz using an open
    source tool developed by us. The metadata files are saved as data/[makam]/[mbid].json.

    For reproducability purposes we note the version of all tools we have used to generate this dataset in the
    file algorithms.json (not integrated in the loader but present in the donwloaded dataset).

    A complementary toolbox for this dataset is MORTY, which is a mode recogition and tonic identification toolbox.
    It can be used and optimized for any modal music culture. Further details are explained in the publication above.

* **License:** Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
* **Downloadable Remotes:** ``all``
* **YAML File:** :download:`compmusic_otmm_makam.yaml<../dataset_yamls/compmusic_otmm_makam.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @software{sertan_senturk_2016_58413,
        author       = {Sertan Şentürk and
                        Altuğ Karakurt},
        title        = {{otmm_makam_recognition_dataset: Ottoman-Turkish
                         Makam Music Makam Recognition Dataset}},
        month        = jul,
        year         = 2016,
        publisher    = {Zenodo},
        version      = {dlfm2016},
        doi          = {10.5281/zenodo.58413},
        url          = {https://doi.org/10.5281/zenodo.58413}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/compmusic_otmm_makam.yaml
      :language: yaml

compmusic_raga
--------------


* **Annotations:** ``F0Data``, ``SectionData``, ``KeyData``


**About this dataset:**
   
Rāga datasets from CompMusicomprise two sizable datasets, one for each music tradition,
Carnatic and Hindustani. These datasets comprise full length audio recordings and their
associated rāga labels. These two datasets can be used to develop and evaluate approaches
for performing automatic rāga recognition in Indian art music.

These datasets are derived from the CompMusic corpora of Indian Art Music. Therefore, the
dataset has been compiled at the Music Technology Group, by a group of researchers working
on the computational analysis of Carnatic and Hindustani music within the framework of the
ERC-funded CompMusic project.

Each recording is associated with a MBID. With the MBID other information can be obtained
using the Dunya API or pycompmusic.

The Carnatic subset comprises 124 hours of audio recordings and editorial metadata that
includes carefully curated and verified rāga labels. It contains 480 recordings belonging
to 40 rāgas with 12 recordings per rāga.

The Hindustani subset comprises 116 hours of audio recordings and editorial metadata that
includes carefully curated and verified rāga labels. It contains 300 recordings belonging
to 30 rāgas with 10 recordings per rāga.

The dataset also includes features per each file:
* Tonic: float indicating the recording tonic
* Tonic fine tuned: float indicating the manually fine-tuned recording tonic
* Predominant pitch: automatically-extracted predominant pitch time-series (timestamps and freq. values)
* Post-processed pitch: automatically-extracted and post-processed predominant pitch time-series
* Nyas segments: KNN-extracted segments of Nyas (start and end times provided)
* Tani segments: KNN-extracted segments of Tanis (start and end times provided)

The dataset includes both txt files and json files that contain information about each audio
recording in terms of its mbid, the path of the audio/feature files and the associated rāga
identifier. Each rāga is assigned a unique identifier by Dunya, which is similar to the mbid
in terms of purpose. A mapping of the rāga id to its transliterated name is also provided.

For more information about the dataset please refer to: https://compmusic.upf.edu/node/328

* **License:** Creative Commons Attribution 4.0 International
* **Downloadable Remotes:** ``features``
* **YAML File:** :download:`compmusic_raga.yaml<../dataset_yamls/compmusic_raga.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   While annotations and metadata are freely downloadable, the audio of this 
       dataset has restricted access. Please access: https://zenodo.org/record/7278511 and request 
       access to the audio, specifying your purpose. The audio will be shared for research purposes. 
       In such case, when access to the audio is granted, please organize the dataset as specified 
       in the ``directory_structure.txt`` file found when you download the features and metadata using
       the .download() method of this dataloader.

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @article{gulati_2016,
        author       = {Gulati, Sankalp and Serrà, Joan and Kaustuv Kani, Ganguli 
                          and Sentürk, Sertan and Serra, Xavier},
        title        = {{Time-delayed melody surfaces for raga recognition}},
        year         = 2016,
        pages        = 751--757,
        journal      = {In Proceedings of the 17th International Society for Music Information 
                          Retrieval Conference (ISMIR), New York, USA},
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/compmusic_raga.yaml
      :language: yaml

cuidado
-------


* **Annotations:** ``BeatData``, ``TempoData``


**About this dataset:**
   
The Cuidado Rhythm Dataset is a comprehensive collection of rhythm annotations for cuidado dance music. This dataset is designed for tasks such as beat tracking, rhythm analysis, and tempo estimation in ballroom dance music. It includes annotations for beats and bars corresponding to different dance styles within the ballroom genre.

**Dataset Overview:**

The dataset offers beat and bar annotations for various cuidado dance styles, such as Waltz, Tango, Viennese Waltz, Slow Foxtrot, Quickstep, Samba, Cha-Cha-Cha, Rumba, Paso Doble, and Jive. These annotations are provided in a format that includes beat time in seconds and beat ID, facilitating precise rhythm analysis.

**Beat and Bar Annotations:**

The beat annotations are structured as `.beats` files, where each line represents a beat with its timestamp and beat ID.

**Annotation Methodology:**

The dataset's annotations are based on the tempo guidelines of each cuidado dance style. Initial annotations were generated using a beat tracker, and then manually adjusted for accuracy. This method ensures that the annotations reflect the characteristic rhythms of each dance style.

**Applications:**

The Cuidado Rhythm Dataset is ideal for developing and testing algorithms for beat tracking, tempo estimation, and rhythm analysis in cuidado dance music. It can also be used for educational purposes, offering insights into the rhythmic structures of various ballroom dance styles.

**Acknowledgments and References:**

This dataset was created with the collaboration of experts in cuidado dance music. We extend our gratitude to those who contributed their knowledge and expertise to this project. For detailed information on the dataset and its creation, please refer to the associated research papers and documentation (https://zenodo.org/records/1416940).

[1] Gouyon F., A. Klapuri, S. Dixon, M. Alonso, G. Tzanetakis, C. Uhle, and P. Cano. An experimental comparison of audio tempo induction algorithms. Transactions on Audio, Speech and Language Processing 14(5), pp.1832-1844, 2006.

[2] Böck, S., and M. Schedl. Enhanced beat tracking with context-aware neural networks. In Proceedings of the International Conference on Digital Audio Effects (DAFX), 2010.

[3] Dixon, S., F. Gouyon & G. Widmer. Towards Characterisation of Music via Rhythmic Patterns. In Proceedings of the 5th International Society for Music Information Retrieval Conference (ISMIR). 2004.

* **License:** Creative Commons Attribution Non Commercial Share Alike 4.0 International.
* **Downloadable Remotes:** *No direct download available*
* **YAML File:** :download:`cuidado.yaml<../dataset_yamls/cuidado.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   Unfortunately the Cuidado dataset is not available for download.

   ::

       If you have the Cuidado dataset, place the contents into a folder called
       cuidado with the following structure:
           > C_1.0/
               > audio/
               > annotations/beats
               > annotations/tempo
       and copy the cuidado folder to {}

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @article{1678001,
          author={Gouyon, F. and Klapuri, A. and Dixon, S. and Alonso, M. and Tzanetakis, G. and Uhle, C. and Cano, P.},
          journal={IEEE Transactions on Audio, Speech, and Language Processing}, 
          title={An experimental comparison of audio tempo induction algorithms}, 
          year={2006},
          volume={14},
          number={5},
          pages={1832-1844},
          doi={10.1109/TSA.2005.858509}}

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/cuidado.yaml
      :language: yaml

da_tacos
--------


* **Annotations:** ``Instrument``, ``KeyData``


**About this dataset:**
   
Da-TACOS: a dataset for cover song identification and understanding. It contains two subsets,
namely the benchmark subset (for benchmarking cover song identification systems) and the cover
analysis subset (for analyzing the links among cover songs), with pre-extracted features and
metadata for 15,000 and 10,000 songs, respectively. The annotations included in the metadata
are obtained with the API of SecondHandSongs.com. All audio files we use to extract features
are encoded in MP3 format and their sample rate is 44.1 kHz. Da-TACOS does not contain any
audio files. For the results of our analyses on modifiable musical characteristics using the
cover analysis subset and our initial benchmarking of 7 state-of-the-art cover song identification
algorithms on the benchmark subset, you can look at our publication.

For organizing the data, we use the structure of SecondHandSongs where each song is called a
‘performance’, and each clique (cover group) is called a ‘work’. Based on this, the file names
of the songs are their unique performance IDs (PID, e.g. P_22), and their labels with respect
to their cliques are their work IDs (WID, e.g. W_14).

Metadata for each song includes:

    - performance title
    - performance artist
    - work title
    - work artist
    - release year
    - SecondHandSongs.com performance ID
    - SecondHandSongs.com work ID
    - whether the song is instrumental or not

In addition, we matched the original metadata with MusicBrainz to obtain MusicBrainz ID (MBID),
song length and genre/style tags. We would like to note that MusicBrainz related information is
not available for all the songs in Da-TACOS, and since we used just our metadata for matching,
we include all possible MBIDs for a particular songs.

For facilitating reproducibility in cover song identification (CSI) research, we propose a framework
for feature extraction and benchmarking in our supplementary repository: acoss. The feature extraction
component is designed to help CSI researchers to find the most commonly used features for CSI in a
single address. The parameter values we used to extract the features in Da-TACOS are shared in the
same repository. Moreover, the benchmarking component includes our implementations of 7 state-of-the-art
CSI systems. We provide the performance results of an initial benchmarking of those 7 systems on the
benchmark subset of Da-TACOS. We encourage other CSI researchers to contribute to acoss with implementing
their favorite feature extraction algorithms and their CSI systems to build up a knowledge base where
CSI research can reach larger audiences.

Pre-extracted features:

The list of features included in Da-TACOS can be seen below. All the features are extracted with acoss
repository that uses open-source feature extraction libraries such as Essentia, LibROSA, and Madmom.

To facilitate the use of the dataset, we provide two options regarding the file structure.

1. In da-tacos_benchmark_subset_single_files and da-tacos_coveranalysis_subset_single_files folders,
we organize the data based on their respective cliques, and one file contains all the features for
that particular song.

.. code-block:: python

    {
        "chroma_cens": numpy.ndarray,
        "crema": numpy.ndarray,
        "hpcp": numpy.ndarray,
        "key_extractor": {
            "key": numpy.str_,
            "scale": numpy.str_,_
            "strength": numpy.float64
        },
        "madmom_features": {
            "novfn": numpy.ndarray,
            "onsets": numpy.ndarray,
            "snovfn": numpy.ndarray,
            "tempos": numpy.ndarray
        }
        "mfcc_htk": numpy.ndarray,
        "tags": list of (numpy.str_, numpy.str_)
        "label": numpy.str_,
        "track_id": numpy.str_
    }


2. In da-tacos_benchmark_subset_FEATURE and da-tacos_coveranalysis_subset_FEATURE folders,
the data is organized based on their cliques as well, but each of these folders contain only one
feature per song. For instance, if you want to test your system that uses HPCP features, you can
download da-tacos_benchmark_subset_hpcp to access the pre-computed HPCP features. An example for
the contents in those files can be seen below:

.. code-block:: python

    {
        "hpcp": numpy.ndarray,
        "label": numpy.str_,
        "track_id": numpy.str_
    }

* **License:** Creative Commons Attribution Non Commercial Share Alike 4.0 International
* **Downloadable Remotes:** ``metadata``, ``benchmark_cens``, ``benchmark_crema``, ``benchmark_hpcp``, ``benchmark_key``, ``benchmark_madmom``, ``benchmark_mfcc``, ``coveranalysis_tags``, ``coveranalysis_cens``, ``coveranalysis_crema``, ``coveranalysis_hpcp``, ``coveranalysis_key``, ``coveranalysis_madmom``, ``coveranalysis_mfcc``
* **YAML File:** :download:`da_tacos.yaml<../dataset_yamls/da_tacos.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{yesiler2019,
          author = "Furkan Yesiler and Chris Tralie and Albin Correya and Diego F. Silva and Philip Tovstogan and Emilia G{'{o}}mez and Xavier Serra",
          title = "{Da-TACOS}: A Dataset for Cover Song Identification and Understanding",
          booktitle = "Proc. of the 20th Int. Soc. for Music Information Retrieval Conf. (ISMIR)",
          year = "2019",
          pages = "327--334",
          address = "Delft, The Netherlands"
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/da_tacos.yaml
      :language: yaml

dagstuhl_choirset
-----------------


* **Annotations:** ``F0Data``, ``NoteData``


**About this dataset:**
   
Dagstuhl ChoirSet (DCS) is a multitrack dataset of a cappella choral music.
The dataset includes recordings of an amateur vocal ensemble performing two
choir pieces in full choir and quartet settings (total duration 55min 30sec).
The audio data was recorded during an MIR seminar at Schloss Dagstuhl using
different close-up microphones to capture the individual singers’ voices:

* Larynx microphone (LRX): contact microphone attached to the singer's throat.
* Dynamic microphone (DYN): handheld dynamic microphone.
* Headset microphone (HSM): microphone close to the singer's mouth.

LRX, DYN and HSM recordings are provided on the Track level.
All tracks in the dataset have a LRX recording, while only a subset has DYN and HSM recordings.

In addition to the close-up microphone tracks, the dataset also provides the following recordings:

* Room microphone mixdown (STM): mixdown of the stereo room microphone.
* Room microphone left (STL): left channel of the stereo microphone.
* Room microphone right (STR): right channel of the stereo microphone.
* Room microphone mixdown with reverb (StereoReverb_STM): STM signal with artificial reverb.
* Piano left (SPL): left channel of the piano accompaniment.
* Piano right (SPR): right channel of the piano accompaniment.

All room microphone and piano recordings are provided on the Multitrack level.
All multitracks have room microphone signals, while only a subset has piano recordings.

For more details, we refer to:
Sebastian Rosenzweig (1), Helena Cuesta (2), Christof Weiß (1),
Frank Scherbaum (3), Emilia Gómez (2,4), and Meinard Müller (1):
Dagstuhl ChoirSet: A Multitrack Dataset for MIR Research on Choral Singing.
Transactions of the International Society for Music Information Retrieval,
3(1), pp. 98–110, 2020.
DOI: https://doi.org/10.5334/tismir.48

(1) International Audio Laboratories Erlangen, DE
(2) Music Technology Group, Universitat Pompeu Fabra, Barcelona, ES
(3) University of Potsdam, DE
(4) Joint Research Centre, European Commission, Seville, ES

* **License:** Creative Commons Attribution 4.0 International
* **Downloadable Remotes:** ``full_dataset``
* **YAML File:** :download:`dagstuhl_choirset.yaml<../dataset_yamls/dagstuhl_choirset.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @article{RosenzweigCWSGM20_DCS_TISMIR,
          author    = {Sebastian Rosenzweig and Helena Cuesta and Christof Wei{\ss} and Frank Scherbaum and Emilia G{'o}mez and Meinard M{"u}ller},
          title     = {{D}agstuhl {ChoirSet}: {A} Multitrack Dataset for {MIR} Research on Choral Singing},
          journal   = {Transactions of the International Society for Music Information Retrieval ({TISMIR})},
          volume    = {3},
          number    = {1},
          year      = {2020},
          pages     = {98--110},
          publisher = {Ubiquity Press},
          doi       = {10.5334/tismir.48},
          url       = {http://doi.org/10.5334/tismir.48},
          url-demo  = {https://www.audiolabs-erlangen.de/resources/MIR/2020-DagstuhlChoirSet}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/dagstuhl_choirset.yaml
      :language: yaml

dali
----


* **Annotations:** ``NoteData``


**About this dataset:**
   
DALI contains 5358 audio files with their time-aligned vocal melody.
It also contains time-aligned lyrics at four levels of granularity: notes,
words, lines, and paragraphs.

For each song, DALI also provides additional metadata: genre, language, musician,
album covers, or links to video clips.

For more details, please visit: https://github.com/gabolsgabs/DALI

* **License:** Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
* **Downloadable Remotes:** ``metadata``
* **YAML File:** :download:`dali.yaml<../dataset_yamls/dali.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   To download this dataset, visit:

   ::

       https://zenodo.org/record/2577915 and request access.
       Once downloaded, unzip the file DALI_v1.0.zip
       and place the result in:
       {}

       Use the function dali_code.get_audio you can find at:
       https://github.com/gabolsgabs/DALI for getting the audio
       and place them in "audio" folder with the following structure:
       > Dali
           > audio
           ...

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{Meseguer-Brocal_2018,
          Title = {DALI: a large Dataset of synchronized Audio, LyrIcs and notes, automatically created using teacher-student
           machine learning paradigm.},
          Author = {Meseguer-Brocal, Gabriel and Cohen-Hadria, Alice and Peeters, Geoffroy},
          Booktitle = {19th International Society for Music Information Retrieval Conference},
          Editor = {ISMIR}, Month = {September},
          Year = {2018}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/dali.yaml
      :language: yaml

egfxset
-------


* **Annotations:** ``NoteData``


**About this dataset:**
   
EGFxSet (Electric Guitar Effects dataset) features recordings for all clean tones in a 22-fret Stratocaster,
recorded with 5 different pickup configurations, also processed through 12 popular guitar effects.
Our dataset was recorded in real hardware, making it relevant for music information retrieval tasks on real music.
We also include annotations for parameter settings of the effects we used.

EGFxSet is a dataset of 8,970 audio files with a 5-second duration each,
summing a total time of - 12 hours and 28 minutes -.

All possible 138 notes of a standard tuning 22 frets guitar were recorded in each one of the 5 pickup configurations,
giving a total of 690 clean tone audio files ( 58 min ).

The 690 clean audio (58 min) files were processed through 12 different audio effects employing actual guitar gear (no VST emulations were used),
summing a total of 8,280 processed audio files (11 hours 30 min).

The effects employed were divided into four categories, and each category comprised three different effects.
Sometimes there were employed more than one effect from a same guitar equipment.

Categories, Models and Effects:

    Distortion:
        Boss BD-2:
                   Blues Driver
        Ibanez Minitube Screamer:
                   Tube Screamer
        ProCo RAT2:
                   Distortion

    Modulation:
        Boss CE-3:
                   Chorus
        MXR Phase 45:
                   Phaser
        Mooer E-Lady:
                   Flanger

    Delays:
        Line6 DL-4:
                    Digital Delay,
                    Tape Echo,
                    Sweep Echo

    Reverb:
        Orange CR-60 Combo Amplifier:
                                    Plate Reverb,
                                    Hall Reverb,
                                    Spring Reverb



Annotations are labeled by a trained electric guitar musician. For each tone, we provide:

         - Guitar string number

         - Fret number

         - Guitar pickup configuration

         - Effect name

         - Effect type

         - Hardware modes

         - Knob names

         - Knob types

         - Knob settings

The dataset website is: https://egfxset.github.io/

The data can be accessed here: https://zenodo.org/record/7044411#.YxKdSWzMKEI

An ISMIR extended abstract was presented in 2022: https://ismir2022.ismir.net/program/lbd/

This dataset was conceived during Iran Roman's "Deep Learning for Music Information Retrieval" course
imparted in the postgraduate studies in music technology at the UNAM (Universidad Nacional Autónoma de México).
The result is a combined effort between two UNAM postgraduate students (Hegel Pedroza and Gerardo Meza) and Iran Roman(NYU).

* **License:** Creative Commons Attribution 4.0 International
* **Downloadable Remotes:** ``bluesDriver``, ``chorus``, ``clean``, ``digitalDelay``, ``flanger``, ``hallReverb``, ``phaser``, ``plateReverb``, ``rat``, ``spring-Reverb``, ``sweepEcho``, ``tapeEcho``, ``tubeScreamer``, ``metadata``
* **YAML File:** :download:`egfxset.yaml<../dataset_yamls/egfxset.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @techreport{pedroza2022egfxset,
            title={EGFxSet: Electric guitar tones processed through real effects of distortion, modulation, delay and reverb},
            author={Pedroza, Hegel and Meza, Gerardo and Roman, Iran},
            year={2022},
            institution={UNAM},
            booktitle={Extended Abstracts for the Late-Breaking Demo Session of the 23rd Int. Society for Music Information Retrieval Conf., Bengaluru, India, 2022.},
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/egfxset.yaml
      :language: yaml

filosax
-------


* **Annotations:** ``NoteData``


**About this dataset:**
   
The Filosax dataset was conceived, curated and compiled by Dave Foster (a PhD student on the AIM programme at QMUL) and his supervisor Simon Dixon (C4DM @ QMUL).
The dataset is a collection of 48 multitrack jazz recordings, where each piece has 8 corresponding audio files:

1) The original Aebersold backing track (stereo)
2) Bass_Drums, a mono file of a mix of bass and drums
3) Piano_Drums, a mono file of a mix of piano and drums
4) Participant 1 Sax, a mono file of solo saxophone
5) Participant 2 Sax, a mono file of solo saxophone
6) Participant 3 Sax, a mono file of solo saxophone
7) Participant 4 Sax, a mono file of solo saxophone
8) Participant 5 Sax, a mono file of solo saxophone

Each piece is ~6mins long, so each of the 8 stems contains ~5hours of audio

For each piece, there is a corresponding .jams file containing piece-level annotations:

1) Beat annotation for the start of each bar and any mid-bar chord change
2) Chord annotation for each bar, and mid-bar chord change
3) Section annotation for when the solo changes between the 3 categories:
    a) head (melody)
    b) written solo (interpretation of transcribed solo)
    c) improvised solo

For each Sax recording (5 per piece), there is a corresponding .json file containing note annotations (see Note object).

The Participant folders also contain MIDI files of the transcriptions (frame level and score level) as well as a PDF and MusicXML of the typeset solo.

The dataset comes in 2 flavours: full (all 48 tracks and 5 sax players) and lite (5 tracks and 2 sax players).
Both flavours can be used with or without the backing tracks (which need to be purchased online).
Hence, when opening the dataset, use one of 4 versions: 'full', 'full_sax', 'lite', 'lite_sax'.

* **License:** The Filosax dataset contains copyright material and is shared with researchers under the following conditions: 1. Filosax may only be used by the individual signing below and by members of the research group or organisation of this individual. This permission is not transferable. 2. Filosax may be used only for non-commercial research purposes. 3. Filosax (or data enabling the its reproduction) may not be sold, leased, published or distributed to any third party without written permission from the Filosax administrator. 4. When research results obtained using Filosax are publicly released (in the form of reports, publications, or derivative software), clear indication of the use of Filosax shall be given, usually in the form of a citation of the following paper: D. Foster and S. Dixon (2021), Filosax: A Dataset of Annotated Jazz Saxophone Recordings. 22nd International Society for Music Information Retrieval Conference (ISMIR). 5. Queen Mary University of London shall not be held liable for any errors in the content of Filosax nor damage arising from the use of Filosax. 6. The Filosax administrator may update these conditions of use at any time.
* **Downloadable Remotes:** *No direct download available*
* **YAML File:** :download:`filosax.yaml<../dataset_yamls/filosax.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   To download the dataset, first go to the Zenodo pages below to request access:

   (Full - 14.5GB)
   https://zenodo.org/record/5643843#.YYL7aS2l3UI

   (Lite - 558MB)
   https://zenodo.org/record/5643734#.YYLQ-i2l3UI

   Unzip the downloaded file to the folder /Users/<username>/mir_datasets/ (or wherever data_home has been assigned on initialization), and remove the version number from the folder:

   (Full)
   /Users/<username>/mir_datasets/Filosax

   (Lite)
   /Users/<username>/mir_datasets/Filosax_Lite

   This data is sufficient to use the dataset in the "_sax" (sax only) mode. To download the backing data, go to the Aebersold sites:

   (Full)
   https://www.jazzbooks.com/mm5/merchant.mvc?&Screen=WISH&Store_Code=JAJAZZ&WishList_ID=1679

   (Lite)
   https://www.jazzbooks.com/mm5/merchant.mvc?&Screen=WISH&Store_Code=JAJAZZ&WishList_ID=1678

   Put the files downloaded into the "/Aebersold" folder, and then run the appropriate script from inside the home folder:

   (Full)
   python Scripts/Compile_Backing.py -version full

   (Lite)
   python Scripts/Compile_Backing.py -version lite

   which populates the "/Backing" folder with edited files, which match the versions that were used in the recordings.

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{
        foster_filosax_2021,
        title={Filosax: A Dataset of Annotated Jazz Saxophone Recordings},
        author={Foster, Dave and Dixon, Simon},
        booktitle={International Society for Music Information Retrieval (ISMIR) Conference},
        year={2021}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/filosax.yaml
      :language: yaml

fma_keys
--------


* **Annotations:** ``KeyData``


**About this dataset:**
   
FMA Keys is an expert-labeled dataset for the evaluation of key detection containing
340 hours (5489 songs) of song-level key and mode annotations, spread across 17 genres.

This dataset has been annotated by one annotator with perfect pitch and twenty years of
music experience as a concert pianist. A sample of this dataset was cross-annotated
by two annotators with high inter-annotator agreement.

Dataset use

The annotations are available for conducting non-commercial research
related to audio analysis.

About the dataset

For each song, we provide annotations for:
- FMA track id
- Spotify URI (when available)
- Key and mode

The modes are provided both as strings and numbers:
 "Major" <-> 1, "minor" <-> 0

Similarly, for the keys:
"C" <-> 0, "C#" <-> 1, etc.

We also provide easy access to the underlying audio data
from the FMA dataset.

We filtered the FMA dataset to a subset that exists in the Spotify API
through fuzzy matching the artists, titles.
Next, we compared song duration and discard results that are egregiously different.

About the audio

All the audio is collected in and distributed by the FMA dataset by Michael Defferrard,
Kirell Benzi, Pierre Vandergheynst, and Xavier Bresson.

The FMA metadata is made freely available for public use under a Creative Commons license.
We do not hold the copyright on the audio and distribute it under the license chosen by the artist.
The dataset is meant for research purposes.

* **License:** Creative Commons Attribution 4.0 International
* **Downloadable Remotes:** ``metadata``, ``tracks-000-019``, ``tracks-020-039``, ``tracks-040-049``, ``tracks-050-059``, ``tracks-060-069``, ``tracks-070-079``, ``tracks-080-089``, ``tracks-090-099``, ``tracks-100-109``, ``tracks-110-124``
* **YAML File:** :download:`fma_keys.yaml<../dataset_yamls/fma_keys.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{
              wong_fma_keys,
              title = {FMAK: A Dataset of Key and Mode Annotations for the Free Music Archive},
              author = {Wong, Stella and Hernandez, Gandalf},
              booktitle = {24th International Society for Music Information Retrieval Conference (ISMIR)},
              year = {2023}
          }
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/fma_keys.yaml
      :language: yaml

four_way_tabla
--------------


* **Annotations:** ``BeatData``


**About this dataset:**
   
Four-Way Tabla Stroke Transcription and Classification Loader


    The Four-Way Tabla Dataset includes audio recordings of tabla solo with onset annotations for particular
    strokes types. This dataset was published in 2021 in the context of ISMIR2021 (Online), and may be used for
    tasks related to tabla analysis, including problems such as onset detection and stroke classification.

    Total audio samples: We do have a total of 226 samples for training and 10 for testing. Each audio has
    an approximate duration of 1 minute.

    Audio specifications:

    * Sampling frequency: 44.1 kHz
    * Bit-depth: 16 bit
    * Audio format: .wav

    Dataset usage: This dataset may be used for the data-driven research of tabla stroke transcription and
    identification. In this dataset, four important tabla characteristic strokes are considered.

    Dataset structure: The dataset is split in two subsets, containing training and testing samples. Within each
    subset, there is a folder containing the audios, and another folder containing the onset annotations. The onset
    annotations are organized in a folder per each stroke type: b, d, rb, rt. Therefore, the paths to onsets would
    look like:

    .. code-block:: bash

        train/onsets/<StrokeType>/<ID>.onsets

    The dataset is made available by CompMusic under a Creative Commons
    Attribution 3.0 Unported (CC BY 3.0) License.

* **License:** Creative Commons Attribution 4.0 International License.
* **Downloadable Remotes:** ``remote_data``
* **YAML File:** :download:`four_way_tabla.yaml<../dataset_yamls/four_way_tabla.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @article{RohitMA2021,
          author = {M.A, Rohit and Bhattacharjee, Amitrajit and Rao, Preeti},
          journal = {Proc. of the 22nd Int. Society for Music Information Retrieval Conf., Online, 2021},
          title = {{Four-way Classification of Tabla Strokes with Models Adapted from Automatic Drum Transcription}},
          year = {2021}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/four_way_tabla.yaml
      :language: yaml

freesound_one_shot_percussive_sounds
------------------------------------


* **Annotations:** *None*


**About this dataset:**
   
Freesound One-Shot Percussive Sounds Dataset Loader


    Introduction:

    This dataset contains 10254 one-shot (single event) percussive sounds from freesound.org, a timbral
    analysis computed by two different extractors (FreesoundExtractor from Essentia and AudioCommons Extractor),
    and a list of tags. There is also metadata information about the audio file, since the audio specifications
    are not the same along all the dataset tracks. The analysis data was used to train the generative model
    for "Neural Percussive Synthesis Parameterised by High-Level Timbral Features".

    Dataset Construction:

    To collect this dataset, the following steps were performed:
    * Freesound was queried with words associated with percussive instruments, such as "percussion", "kick",
    "wood" or "clave". Only sounds with less than one second of effective duration were selected.
    * This stage retrieved some audio clips that contained multiple sound events or that were of low quality.
    Therefore, we listened to all the retrieved sounds and manually discarded the sounds presenting one of these
    characteristics. For this, the percussive-annotator was used (https://github.com/xavierfav/percussive-annotator).
    This tool allows the user to annotate a dataset that focuses on percussive sounds.
    * The sounds were then cut or padded to have 1-second length, normalized and downsampled to 16kHz.
    * Finally, the sounds were analyzed with the AudioCommons Extractor, to obtain the AudioCommons timbral
    descriptors.

    Authors and Contact:

    This dataset was developed by António Ramires, Pritish Chadna, Xavier Favory, Emilia Gómez and Xavier Serra.
    Any questions related to this dataset please contact:
    António Ramires (antonio.ramires@upf.edu / aframires@gmail.com)

    Acknowledgements:

    This work has received funding from the European Union's Horizon 2020 research and innovation programme under
    the Marie Skłodowska-Curie grant agreement No. 765068 (MIP-Frontiers).
    This work has received funding from the European Union's Horizon 2020 research and innovation programme under
    grant agreement No. 770376 (TROMPA).

* **License:** The dataset is licensed under The Creative Commons Attribution Non Commercial Share Alike 4.0 International. Please check the specific license of each sound by running track.license
* **Downloadable Remotes:** ``audio``, ``analysis``, ``sound_info_analysis``, ``metadata``, ``readme``
* **YAML File:** :download:`freesound_one_shot_percussive_sounds.yaml<../dataset_yamls/freesound_one_shot_percussive_sounds.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{ramires2020, 
          author = "Antonio Ramires and Pritish Chandna and Xavier Favory and Emilia Gómez and Xavier Serra",
          title = "Neural Percussive Synthesis Parametrerised by High-Level Timbral Features",
          booktitle = "Proc. of the IEEE Int. Conf. on Acoustics, Speech and Signal Processing (ICASSP)",
          year = "2020"
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/freesound_one_shot_percussive_sounds.yaml
      :language: yaml

giantsteps_key
--------------


* **Annotations:** ``TempoData``, ``KeyData``


**About this dataset:**
   
The GiantSteps+ EDM Key Dataset includes 600 two-minute sound excerpts from various EDM subgenres, annotated with
single-key labels, comments and confidence levels by Daniel G. Camhi, and thoroughly revised and expanded by Ángel
Faraldo at MTG UPF. Additionally, 500 tracks have been thoroughly analysed, containing pitch-class set descriptions,
key changes, and additional modal changes. This dataset is a revision of the original  GiantSteps Key Dataset, available
in Github (<https://github.com/GiantSteps/giantsteps-key-dataset>) and initially described in:

.. code-block:: latex

    Knees, P., Faraldo, Á., Herrera, P., Vogl, R., Böck, S., Hörschläger, F., Le Goff, M. (2015).
    Two Datasets for Tempo Estimation and Key Detection in Electronic Dance Music Annotated from User Corrections.
    In Proceedings of the 16th International Society for Music Information Retrieval Conference, 364–370. Málaga, Spain.

The original audio samples belong to online audio snippets from Beatport, an online music store for DJ's and Electronic
Dance Music Producers (<http:\www.beatport.com>). If this dataset were used in further research, we would appreciate
the citation of the current DOI (10.5281/zenodo.1101082) and the following doctoral dissertation, where a detailed
description of the properties of this dataset can be found:

.. code-block:: latex

    Ángel Faraldo (2017). Tonality Estimation in Electronic Dance Music: A Computational and Musically Informed Examination.
    PhD Thesis. Universitat Pompeu Fabra, Barcelona.

This dataset is mainly intended to assess the performance of computational key estimation algorithms in electronic dance
music subgenres.

All the data of this dataset is licensed with Creative Commons Attribution Share Alike 4.0 International.

* **License:** Creative Commons Attribution Share Alike 4.0 International.
* **Downloadable Remotes:** ``audio``, ``keys``, ``metadata``
* **YAML File:** :download:`giantsteps_key.yaml<../dataset_yamls/giantsteps_key.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{knees2015two,
        title={Two data sets for tempo estimation and key detection in electronic dance music annotated from user corrections},
        author={Knees, Peter and Faraldo P{'e}rez, {'A}ngel and Boyer, Herrera and Vogl, Richard and B{"o}ck, Sebastian and H{"o}rschl{"a}ger, Florian and Le Goff, Mickael and others},
        booktitle={Proceedings of the 16th International Society for Music Information Retrieval Conference (ISMIR); 2015 Oct 26-30; M{'a}laga, Spain.[M{'a}laga]: International Society for Music Information Retrieval, 2015. p. 364-70.},
        year={2015},
        organization={International Society for Music Information Retrieval (ISMIR)}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/giantsteps_key.yaml
      :language: yaml

giantsteps_tempo
----------------


* **Annotations:** ``TempoData``


**About this dataset:**
   
GiantSteps tempo + genre is a collection of annotations for 664 2min(1) audio previews from
www.beatport.com, created by Richard Vogl <richard.vogl@tuwien.ac.at> and
Peter Knees <peter.knees@tuwien.ac.at>

references:

.. [giantsteps_tempo_cit_1] Peter Knees, Ángel Faraldo, Perfecto Herrera, Richard Vogl,
    Sebastian Böck, Florian Hörschläger, Mickael Le Goff: "Two data
    sets for tempo estimation and key detection in electronic dance
    music annotated from user corrections", Proc. of the 16th
    Conference of the International Society for Music Information
    Retrieval (ISMIR'15), Oct. 2015, Malaga, Spain.

.. [giantsteps_tempo_cit_2] Hendrik Schreiber, Meinard Müller: "A Crowdsourced Experiment
    for Tempo Estimation of Electronic Dance Music", Proc. of the
    19th Conference of the International Society for Music
    Information Retrieval (ISMIR'18), Sept. 2018, Paris, France.

The audio files (664 files, size ~1gb) can be downloaded from http://www.beatport.com/
using the bash script:

https://github.com/GiantSteps/giantsteps-tempo-dataset/blob/master/audio_dl.sh

To download the files manually use links of the following form:
http://geo-samples.beatport.com/lofi/<name of mp3 file>
e.g.:
http://geo-samples.beatport.com/lofi/5377710.LOFI.mp3

To convert the audio files to .wav use the script found at
https://github.com/GiantSteps/giantsteps-tempo-dataset/blob/master/convert_audio.sh and run:

.. code-block:: bash

    ./convert_audio.sh

To retrieve the genre information, the JSON contained within the website was parsed.
The tempo annotation was extracted from forum entries of people correcting the bpm values (i.e. manual annotation of tempo).
For more information please refer to the publication [giantsteps_tempo_cit_1]_.

[giantsteps_tempo_cit_2]_ found some files without tempo. There are:

.. code-block:: bash

    3041381.LOFI.mp3
    3041383.LOFI.mp3
    1327052.LOFI.mp3

Their v2 tempo is denoted as 0.0 in tempo and mirex and has no annotation in the JAMS format.

Most of the audio files are 120 seconds long. Exceptions are:

.. code-block:: bash

    name              length (sec)
    906760.LOFI.mp3   62
    1327052.LOFI.mp3  70
    4416506.LOFI.mp3  80
    1855660.LOFI.mp3  119
    3419452.LOFI.mp3  119
    3577631.LOFI.mp3  119

* **License:** Creative Commons Attribution Share Alike 4.0 International.
* **Downloadable Remotes:** ``annotations``
* **YAML File:** :download:`giantsteps_tempo.yaml<../dataset_yamls/giantsteps_tempo.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   Unfortunately the audio files of the Giant Steps Tempo dataset are not available

   ::

       for download. If you have the Giant Steps audio dataset, place the contents into
       a folder called GiantSteps_tempo with the following structure:
           > GiantSteps_tempo/
               > giantsteps-tempo-dataset-0b7d47ba8cae59d3535a02e3db69e2cf6d0af5bb/
               > audio/
       and copy the folder to {}

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{knees2015two,
        title={Two data sets for tempo estimation and key detection in electronic dance music annotated from user corrections},
        author={Knees, Peter and Faraldo P{'e}rez, {'A}ngel and Boyer, Herrera and Vogl, Richard and B{"o}ck, Sebastian and H{"o}rschl{"a}ger, Florian and Le Goff, Mickael and others},
        booktitle={Proceedings of the 16th International Society for Music Information Retrieval Conference (ISMIR); 2015 Oct 26-30; M{'a}laga, Spain.[M{'a}laga]: International Society for Music Information Retrieval, 2015. p. 364-70.},
        year={2015},
        organization={International Society for Music Information Retrieval (ISMIR)},
      }
      @inproceedings{SchreiberM18a_Tempo_ISMIR,
        author={Hendrik Schreiber and Meinard M{"u}ller},
        title={A Crowdsourced Experiment for Tempo Estimation of Electronic Dance Music},
        booktitle={Proceedings of the International Conference on Music Information Retrieval ({ISMIR})},
        address={Paris, France},
        year={2018},
        url-pdf={http://www.tagtraum.com/download/2018_schreiber_tempo_giantsteps.pdf},
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/giantsteps_tempo.yaml
      :language: yaml

good_sounds
-----------


* **Annotations:** ``F0Data``, ``Instrument``


**About this dataset:**
   
The Good-Sounds dataset is born of the collaboration between the Music Technology Group and Korg. Good-Sounds
[2, 16] is carried out recording a training dataset of single note excerpts including six classes of sounds per
studied instrument. Twelve different instruments are recorded, as is shown in Table 2. For each instrument,
the complete range of playable semitones is captured several times with various tonal characteristics. There
are two classes: Good and Bad sounds. Bad sounds are divided into five sub-classes, one for each musical dimension
stated by the expert musicians. Bad sounds are composed by examples of note recordings
that are intentionally badly played. The last class includes examples of note recordings that are considered to
be well played.

This dataset was created in the context of the Pablo project, partially funded by KORG Inc. It contains monophonic
recordings of two kind of exercises: single notes and scales.
The recordings were made in the Universitat Pompeu Fabra / Phonos recording studio by 15 different professional
musicians, all of them holding a music degree and having some expertise in teaching. 12 different instruments were
recorded using one or up to 4 different microphones (depending on the recording session). For all the instruments
the whole set of playable semitones in the instrument is recorded several times with different tonal characteristics.
Each note is recorded into a separate mono .flac audio file of 48kHz and 32 bits. The tonal characteristics are
explained both in the the following section and the related publication. The database is meant for organizing the
sounds in a handy way. It is organised in four different entities: sounds, takes, packs and ratings.

* **License:** Creative Commons Attribution Share Alike 4.0 International.
* **Downloadable Remotes:** ``packs``, ``ratings``, ``sounds``, ``takes``, ``audios``
* **YAML File:** :download:`good_sounds.yaml<../dataset_yamls/good_sounds.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{romani2015real,
        title={A Real-Time System for Measuring Sound Goodness in Instrumental Sounds},
        author={Romani Picas, Oriol and Parra Rodriguez, Hector and Dabiri, Dara and Tokuda, Hiroshi and Hariya, Wataru and Oishi, Koji and Serra, Xavier},
        booktitle={Audio Engineering Society Convention 138},
        year={2015},
        organization={Audio Engineering Society}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/good_sounds.yaml
      :language: yaml

groove_midi
-----------


* **Annotations:** ``BeatData``, ``EventData``, ``TempoData``, ``NoteData``


**About this dataset:**
   
The Groove MIDI Dataset (GMD) is composed of 13.6 hours of aligned MIDI and
synthesized audio of human-performed, tempo-aligned expressive drumming.
The dataset contains 1,150 MIDI files and over 22,000 measures of drumming.

To enable a wide range of experiments and encourage comparisons between methods
on the same data, Gillick et al. created a new dataset of drum performances
recorded in MIDI format. They hired professional drummers and asked them to
perform in multiple styles to a click track on a Roland TD-11 electronic drum kit.
They also recorded the aligned, high-quality synthesized audio from the TD-11 and
include it in the release.

The Groove MIDI Dataset (GMD), has several attributes that distinguish it from
existing ones:

* The dataset contains about 13.6 hours, 1,150 MIDI files, and over 22,000
  measures of drumming.
* Each performance was played along with a metronome set at a specific tempo
  by the drummer.
* The data includes performances by a total of 10 drummers, with more than 80%
  of duration coming from hired professionals. The professionals were able to
  improvise in a wide range of styles, resulting in a diverse dataset.
* The drummers were instructed to play a mix of long sequences (several minutes
  of continuous playing) and short beats and fills.
* Each performance is annotated with a genre (provided by the drummer), tempo,
  and anonymized drummer ID.
* Most of the performances are in 4/4 time, with a few examples from other time
  signatures.
* Four drummers were asked to record the same set of 10 beats in their own
  style. These are included in the test set split, labeled eval-session/groove1-10.
* In addition to the MIDI recordings that are the primary source of data for the
  experiments in this work, the authors captured the synthesized audio outputs of
  the drum set and aligned them to within 2ms of the corresponding MIDI files.

A train/validation/test split configuration is provided for easier comparison of
model accuracy on various tasks.

The dataset is made available by Google LLC under a Creative Commons
Attribution 4.0 International (CC BY 4.0) License.

For more details, please visit: http://magenta.tensorflow.org/datasets/groove

* **License:** Creative Commons Attribution 4.0 International (CC BY 4.0) License.
* **Downloadable Remotes:** ``all``
* **YAML File:** :download:`groove_midi.yaml<../dataset_yamls/groove_midi.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{groove2019,
          Author = {Jon Gillick and Adam Roberts and Jesse Engel and Douglas Eck
                    and David Bamman},
          Title = {Learning to Groove with Inverse Sequence Transformations},
          Booktitle = {International Conference on Machine Learning (ICML)},
          Year = {2019},
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/groove_midi.yaml
      :language: yaml

gtzan_genre
-----------


* **Annotations:** ``BeatData``, ``Genre``, ``TempoData``


**About this dataset:**
   
This dataset was used for the well known genre classification paper:

.. code-block:: latex

    "Musical genre classification of audio signals " by G. Tzanetakis and
    P. Cook in IEEE Transactions on Audio and Speech Processing 2002.

The dataset consists of 1000 audio tracks each 30 seconds long. It
contains 10 genres, each represented by 100 tracks. The tracks are all
22050 Hz mono 16-bit audio files in .wav format.

* **License:** Unfortunately we couldn't find the license information for the GTZAN_genre dataset.
* **Downloadable Remotes:** ``all``, ``mini``, ``tempo_beat_annotations``
* **YAML File:** :download:`gtzan_genre.yaml<../dataset_yamls/gtzan_genre.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @article{tzanetakis2002gtzan,
        title={GTZAN genre collection},
        author={Tzanetakis, George and Cook, P},
        journal={Music Analysis, Retrieval and Synthesis for Audio Signals},
        year={2002}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/gtzan_genre.yaml
      :language: yaml

guitarset
---------


* **Annotations:** ``BeatData``, ``NoteData``, ``ChordData``, ``F0Data``, ``MultiF0Data``, ``KeyData``


**About this dataset:**
   
GuitarSet provides audio recordings of a variety of musical excerpts
played on an acoustic guitar, along with time-aligned annotations
including pitch contours, string and fret positions, chords, beats,
downbeats, and keys.

GuitarSet contains 360 excerpts that are close to 30 seconds in length.
The 360 excerpts are the result of the following combinations:

- 6 players
- 2 versions: comping (harmonic accompaniment) and soloing (melodic improvisation)
- 5 styles: Rock, Singer-Songwriter, Bossa Nova, Jazz, and Funk
- 3 Progressions: 12 Bar Blues, Autumn Leaves, and Pachelbel Canon.
- 2 Tempi: slow and fast.

The tonality (key) of each excerpt is sampled uniformly at random.

GuitarSet was recorded with the help of a hexaphonic pickup, which outputs
signals for each string separately, allowing automated note-level annotation.
Excerpts are recorded with both the hexaphonic pickup and a Neumann U-87
condenser microphone as reference.
3 audio recordings are provided with each excerpt with the following suffix:

- hex: original 6 channel wave file from hexaphonic pickup
- hex_cln: hex wave files with interference removal applied
- mic: monophonic recording from reference microphone
- mix: monophonic mixture of original 6 channel file

Each of the 360 excerpts has an accompanying JAMS file which stores 16 annotations.
Pitch:

- 6 pitch_contour annotations (1 per string)
- 6 midi_note annotations (1 per string)

Beat and Tempo:

- 1 beat_position annotation
- 1 tempo annotation

Chords:

- 2 chord annotations: instructed and performed. The instructed chord annotation
  is a digital version of the lead sheet that's provided to the player, and the
  performed chord annotations are inferred from note annotations, using
  segmentation and root from the digital lead sheet annotation.

For more details, please visit: http://github.com/marl/guitarset/

* **License:** MIT License.
* **Downloadable Remotes:** ``annotations``, ``audio_hex_debleeded``, ``audio_hex_original``, ``audio_mic``, ``audio_mix``
* **YAML File:** :download:`guitarset.yaml<../dataset_yamls/guitarset.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{xi2018guitarset,
      title={GuitarSet: A Dataset for Guitar Transcription},
      author={Xi, Qingyang and Bittner, Rachel M and Ye, Xuzhou and Pauwels, Johan and Bello, Juan P},
      booktitle={International Society of Music Information Retrieval (ISMIR)},
      year={2018}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/guitarset.yaml
      :language: yaml

hainsworth
----------


* **Annotations:** ``BeatData``, ``TempoData``


**About this dataset:**
   
**Dataset Overview:**

The Hainsworth Dataset [1] comprises 222 musical excerpts, each approximately 1 minute in length, categorized into six genres: rock/pop, dance, jazz, folk, classical, and choral. It was created by Stephen Hainsworth as part of his PhD thesis [1] on automatic music transcription. The dataset offers annotations for beat and downbeat locations, which were generated in a two-stage process. Initially, initial taps were recorded, and then annotations were manually corrected using a custom interface in Matlab, guided by a time-frequency representation.

Of particular significance is the inclusion of approximately 20 choral examples, which posed a significant challenge for annotation due to their unique characteristics. This dataset gained recognition within the beat tracking community for its contribution to annotating and analyzing such challenging musical signals.

In 2014, [2] conducted revisions on the beat and downbeat annotations to correct errors, leading to an enhancement in performance.

**Applications:**

The Hainsworth Dataset Loader is valuable for tasks related to beat tracking, rhythm analysis, and downbeat detection in various musical genres. Researchers and developers can utilize this dataset for algorithm development, testing, and evaluation. Additionally, it serves as a valuable resource for educational purposes, providing insights into the rhythmic structures of different musical genres.

**Acknowledgments and References:**

We would like to acknowledge Stephen Hainsworth for creating this dataset and his significant contribution to the field of automatic music transcription. Special thanks to [2] for their efforts in improving the dataset annotations.

For more detailed information about the dataset and its creation, please refer to Stephen Hainsworth's PhD thesis and the associated research papers and documentation.

[1] Hainsworth, Stephen. (PhD Thesis)

[2] Böck, Sebastian, et al. "Enhanced beat tracking with context-aware neural networks." In Proceedings of the International Conference on Digital Audio Effects (DAFX), 2010.

* **License:** Creative Commons Attribution Non Commercial Share Alike 4.0 International.
* **Downloadable Remotes:** *No direct download available*
* **YAML File:** :download:`hainsworth.yaml<../dataset_yamls/hainsworth.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   Unfortunately the Hainsworth dataset is not available for download.

   ::

       If you have the Hainsworth dataset, place the contents into a folder called
       hainsworth with the following structure:
           > H_1.0/
               > audio/
               > annotations/beats
               > annotations/tempo
       and copy the hainsworth folder to {}

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @article{article,
      author = {Macleod, Malcolm and Hainsworth, Stephen},
      year = {2004},
      month = {11},
      pages = {},
      title = {Particle Filtering Applied to Musical Tempo Tracking},
      volume = {2004},
      journal = {EURASIP Journal on Advances in Signal Processing},
      doi = {10.1155/S1110865704408099}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/hainsworth.yaml
      :language: yaml

idmt_smt_audio_effects
----------------------


* **Annotations:** ``Instrument``, ``NoteData``


**About this dataset:**
   
IDMT-SMT-Audio-Effects is a large database for automatic detection of audio effects in recordings of electric guitar and bass and
related signal processing. The overall duration of the audio material is approx. 30 hours.

The dataset consists of 55044 WAV files (44.1 kHz, 16bit, mono) with single recorded notes:

20592 monophonic bass notes
20592 monophonic guitar notes
13860 polyphonic guitar sounds
Overall, 11 different audio effects are incorporated:
feedback delay, slapback delay, reverb, chorus, flanger, phaser, tremolo, vibrato,
distortion, overdrive, no effect (unprocessed notes/sounds)

2 different electric guitars and 2 different electric bass guitars, each with two different pick-up settings and
up to three different plucking styles (finger plucked - hard, finger plucked - soft, picked) were used for recording.
The notes cover the common pitch range of a 4-string bass guitar from E1 (41.2 Hz) to G3 (196.0 Hz) or the common
pitch range of a 6-string electric guitar from E2 (82.4 Hz) to E5 (659.3 Hz).
Effects processing was performed using a digital audio workstation and a variety of mostly freely available effect
plugins.

To organize the database, lists in XML format are used, which record all relevant information and are provided with
the database as well as a summary of the used effect plugins and parameter settings.

In addition, most of this information is also encoded in the first part of the file name of the audio files using
a simple alpha-numeric encoding scheme. The second part of the file name contains unique identification numbers.
This provides an option for fast and flexible structuring of the data for various purposes.

DOI
10.5281/zenodo.7544032

* **License:** Creative Commons BY-NC-ND 4.0. https://creativecommons.org/licenses/by-nc-nd/4.0/
* **Downloadable Remotes:** ``full_dataset``
* **YAML File:** :download:`idmt_smt_audio_effects.yaml<../dataset_yamls/idmt_smt_audio_effects.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   IDMT-SMT-Audio-Effects Dataset is available at:

   ::

       https://www.idmt.fraunhofer.de/en/publications/datasets/audio_effects.html
       And Zenodo:
       https://zenodo.org/records/7544032
    
       Folder tree:
       data_home/
       ├── Bass monophon/
       │   ├── Lists
       │   └── Samples
       ├── Bass monophon2
       ├── Gitarre monophon/
       │   ├── Lists
       │   ├── Samples
       │   └── ReadMe.txt
       ├── Gitarre monophon2
       ├── Gitarre polyphon/
       │   ├── Lists
       │   └── Samples
       ├── Gitarre polyphon2
       ├── Gitarre_polyphon2.zip       # Duplicate of Gitarre polyphon2
       ├── IDMT-SMT-AUDIO-EFFECTS/     # Empty folder
       └── IDMT-SMT-Audio-Effects-Description.pdf

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @dataset{stein_michael_2023_7544032,
        author       = {Stein, Michael},
        title        = {IDMT-SMT-Audio-Effects Dataset},
        month        = jan,
        year         = 2023,
        publisher    = {Zenodo},
        version      = {1.0.0},
        doi          = {10.5281/zenodo.7544032},
        url          = {https://doi.org/10.5281/zenodo.7544032}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/idmt_smt_audio_effects.yaml
      :language: yaml

ikala
-----


* **Annotations:** ``F0Data``, ``Instrument``, ``NoteData``, ``LyricData``


**About this dataset:**
   
The iKala dataset is comprised of 252 30-second excerpts sampled from 206 iKala
songs (plus 100 hidden excerpts reserved for MIREX).
The music accompaniment and the singing voice are recorded at the left and right
channels respectively and can be found under the Wavfile directory.
In addition, the human-labeled pitch contours and timestamped lyrics can be
found under PitchLabel and Lyrics respectively.

For more details, please visit: http://mac.citi.sinica.edu.tw/ikala/

* **License:** When it was distributed, Ikala used to have a custom license. Visit http://mac.citi.sinica.edu.tw/ikala/ for more details.
* **Downloadable Remotes:** ``metadata``, ``notes_pyin``
* **YAML File:** :download:`ikala.yaml<../dataset_yamls/ikala.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   Unfortunately most of the iKala dataset is not available for download.

   ::

       If you have the iKala dataset, place the contents into a folder called
       iKala with the following structure:
           > iKala/
               > Lyrics/
               > PitchLabel/
               > Wavfile/
       and copy the iKala folder to {}

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{chan2015vocal,
          title={Vocal activity informed singing voice separation with the iKala dataset},
          author={Chan, Tak-Shing and Yeh, Tzu-Chun and Fan, Zhe-Cheng and Chen, Hung-Wei and Su, Li and Yang, Yi-Hsuan and
          Jang, Roger},
          booktitle={2015 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
          pages={718--722},
          year={2015},
          organization={IEEE}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/ikala.yaml
      :language: yaml

irmas
-----


* **Annotations:** ``Instrument``


**About this dataset:**
   
IRMAS: a dataset for instrument recognition in musical audio signals

This dataset includes musical audio excerpts with annotations of the predominant instrument(s) present.
It was used for the evaluation in the following article:

.. code-block:: latex

    Bosch, J. J., Janer, J., Fuhrmann, F., & Herrera, P. “A Comparison of Sound Segregation Techniques for
    Predominant Instrument Recognition in Musical Audio Signals”, in Proc. ISMIR (pp. 559-564), 2012.

IRMAS is intended to be used for training and testing methods for the automatic recognition of predominant
instruments in musical audio. The instruments considered are: cello, clarinet, flute, acoustic guitar,
electric guitar, organ, piano, saxophone, trumpet, violin, and human singing voice.
This dataset is derived from the one compiled by Ferdinand Fuhrmann in his PhD thesis, with the difference
that we provide audio data in stereo format, the annotations in the testing dataset are limited to specific
pitched instruments, and there is a different amount and lenght of excerpts from the original dataset.


The dataset is split into training and test data.

**Training data**

Total audio samples: 6705
They are excerpts of 3 seconds from more than 2000 distinct recordings.

Audio specifications

* Sampling frequency: 44.1 kHz
* Bit-depth: 16 bit
* Audio format: .wav

IRMAS Dataset trainig samples are annotated by storing the information of each track in their filenames.

* Predominant instrument:

    * The annotation of the predominant instrument of each excerpt is both in the name of the containing
      folder, and in the file name: cello (cel), clarinet (cla), flute (flu), acoustic guitar (gac),
      electric guitar (gel), organ (org), piano (pia), saxophone (sax), trumpet (tru), violin (vio),
      and human singing voice (voi).
    * The number of files per instrument are: cel(388), cla(505), flu(451), gac(637), gel(760), org(682),
      pia(721), sax(626), tru(577), vio(580), voi(778).

* Drum presence

    * Additionally, some of the files have annotation in the filename regarding the presence ([dru])
      or non presence([nod]) of drums.

* The annotation of the musical genre:

    * country-folk ([cou_fol])
    * classical ([cla]),
    * pop-rock ([pop_roc])
    * latin-soul ([lat_sou])
    * jazz-blues ([jaz_blu]).

**Testing data**

Total audio samples: 2874

Audio specifications

* Sampling frequency: 44.1 kHz
* Bit-depth: 16 bit
* Audio format: .wav

IRMAS Dataset testing samples are annotated by the following basis:

* Predominant instrument:

    The annotations for an excerpt named: “excerptName.wav” are given in “excerptName.txt”. More than one
    instrument may be annotated in each excerpt, one label per line. This part of the dataset contains excerpts
    from a diversity of western musical genres, with varied instrumentations, and it is derived from the original
    testing dataset from Fuhrmann (http://www.dtic.upf.edu/~ffuhrmann/PhD/).
    Instrument nomenclatures are the same as the training dataset.

Dataset compiled by Juan J. Bosch, Ferdinand Fuhrmann, Perfecto Herrera,
Music Technology Group - Universitat Pompeu Fabra (Barcelona).

The IRMAS dataset is offered free of charge for non-commercial use only. You can not redistribute it nor modify it.
This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License

For more details, please visit: https://www.upf.edu/web/mtg/irmas

* **License:** Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
* **Downloadable Remotes:** ``training_data``, ``testing_data_1``, ``testing_data_2``, ``testing_data_3``
* **YAML File:** :download:`irmas.yaml<../dataset_yamls/irmas.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @dataset{juan_j_bosch_2014_1290750,
        author       = {Juan J. Bosch and Ferdinand Fuhrmann and Perfecto Herrera},
        title        = {{IRMAS: a dataset for instrument recognition in musical audio signals}},
        month        = sep,
        year         = 2014,
        publisher    = {Zenodo},
        version      = {1.0},
        doi          = {10.5281/zenodo.1290750},
        url          = {https://doi.org/10.5281/zenodo.1290750}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/irmas.yaml
      :language: yaml

jtd
---


* **Annotations:** ``BeatData``, ``NoteData``, ``EventData``


**About this dataset:**
   
Jazz Trio Database (JTD) Loader


    The Jazz Trio Database (JTD) is a dataset comprising 1,294 multitrack jazz performances (about 45 hours total)
    annotated by an automated signal processing pipeline. All performances are commercial recordings of jazz piano
    trios, comprising acoustic piano, upright bass, and drum kit, and are broadly in the "straight-ahead" jazz style.

    Its purpose is to serve as a reference database for the design, evaluation, and implementation of various music
    information retrieval systems related to jazz and improvised music, including (but not limited to) onset detection,
    beat tracking, automatic music transcription, and performer identification.

    For every performance, the following audio files are included:

    1) the "raw" audio from the piano solo, typically including piano, bass, and drums (stereo, 44.1 kHz)
        - for some performances, individual audio files for the left and right stereo channels are also included
    2) unmixed piano audio obtained by applying a music source separation model to the "raw" audio
    3) unmixed bass audio
    4) unmixed drums audio

    For the "raw" audio, there are the following annotations:

    1) Beat timestamps for the start of each quarter note
    2) Downbeat annotations for the start of each bar

    For the three "unmixed" audio files, there are the following annotations:

    1) MIDI transcription (frame-level, currently piano only)
    2) Onset timestamps
    3) Beat-matched onsets

    To "match" onsets in the unmixed audio and beats in the "raw" audio, a window of -32nd/+16th note is applied to
    every beat timestamp, and the nearest onset from every unmixed audio file is taken as the "match". In cases where
    no onsets are contained inside the window, the beat is set to "missing" in the data, such that the number of
    beat-matched onsets is always the same as the number of beats.

    Finally, there are the following piece-level annotations:

    1) Tempo, in quarter-note beats-per-minute
    2) Time signature (either three or four quarter-note beats)
    3) Timestamps for the duration of the piano solo within the performance
    4) Metadata (e.g., recording year, performer names, album title)

    The JTD was created by researchers at the Centre for Music & Science, University of Cambridge, as part of Huw
    Cheston's PhD research, during the period 2023-2024.

    The audio data is not publicly available and access must be requested on Zenodo. The annotations and metadata are
    freely available. The database is made available for research and educational purposes under the MIT license
    (https://github.com/HuwCheston/Jazz-Trio-Database/blob/main/LICENSE).

    For more details, please visit our GitHub repository (https://github.com/HuwCheston/Jazz-Trio-Database/) or
    our TISMIR publication (https://doi.org/10.5334/tismir.186).

* **License:** The MIT License (MIT) Copyright (c) 2023, Huw Cheston Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
* **Downloadable Remotes:** ``annotations``
* **YAML File:** :download:`jtd.yaml<../dataset_yamls/jtd.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   To download the audio for files for JTD, visit: https://zenodo.org/records/13828030 and request access.

   After you've been granted access, press the "Download all" button on the Zenodo record.

   This will create a new file named files-archive (with no extension). Rename the file to files-archive.zip and extract 
   using any unzipping tool (7zip, WinRAR, the unarchiver) or the command line. This will give you a list of multi-part 
   zip files in the form [processed.zip.001, processed.zip.002, ...] and [raw.zip.001, raw.zip.002, ...]. 

   To extract these, use 7zip from the command line:

   ```
   7z x processed.zip.001
   7z x raw.zip.001
   ```

   Note that the default `unzip` command on Linux can't handle these files, so you'll need to use 7zip. You may also be 
   able to use a GUI tool like WinRAR, which was used to create the archive in the first place. 

   These commands will extract the audio to the current folder. You'll then need to move the results to {0}/processed and 
   {0}/raw, respectively, creating these folders if they don't already exist.

   Combined with the annotation files (which can be obtained by calling `.download()` on the `mirdata.Dataset` instance 
   you've just initialized), the end result should be a file structure that looks like:

   ```
   {0}
   ├─ raw
   │  ├─ barronk-allgodschildren-drummondrrileyb-1990-8b77c067.wav    # one to three audio files per performance
   │  ├─ ...
   ├─ processed
   │  ├─ barronk-allgodschildren-drummondrrileyb-1990-8b77c067_piano.wav     # always three audio files per performance
   │  ├─ barronk-allgodschildren-drummondrrileyb-1990-8b77c067_bass.wav
   │  ├─ barronk-allgodschildren-drummondrrileyb-1990-8b77c067_drums.wav
   │  ├─ ...
   ├─ annotations
   │  ├─ barronk-allgodschildren-drummondrrileyb-1990-8b77c067    # one folder per performance
   │  │  ├─ bass_onsets.csv
   │  │  ├─ beats.csv
   │  │  ├─ ...
   │  ├─ barronk-beautifullove-mrazgrileyb-2009-c87abfa6
   │  ├─ ...
   ```

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @article{jazz-trio-database
          title = {Jazz Trio Database: Automated Annotation of Jazz Piano Trio Recordings Processed Using Audio Source Separation},
          url = {https://doi.org/10.5334/tismir.186},
          doi = {10.5334/tismir.186},
          publisher = {Transactions of the International Society for Music Information Retrieval},
          author = {Cheston, Huw and Schlichting, Joshua L and Cross, Ian and Harrison, Peter M C},
          year = {2024},
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/jtd.yaml
      :language: yaml

maestro
-------


* **Annotations:** ``NoteData``


**About this dataset:**
   
MAESTRO (MIDI and Audio Edited for Synchronous TRacks and Organization) is a
dataset composed of over 200 hours of virtuosic piano performances captured
with fine alignment (~3 ms) between note labels and audio waveforms.

The dataset is created and released by Google's Magenta team.

The dataset contains over 200 hours of paired audio and MIDI recordings from
ten years of International Piano-e-Competition. The MIDI data includes key
strike velocities and sustain/sostenuto/una corda pedal positions. Audio and
MIDI files are aligned with ∼3 ms accuracy and sliced to individual musical
pieces, which are annotated with composer, title, and year of performance.
Uncompressed audio is of CD quality or higher (44.1–48 kHz 16-bit PCM stereo).

A train/validation/test split configuration is also proposed, so that the same
composition, even if performed by multiple contestants, does not appear in
multiple subsets. Repertoire is mostly classical, including composers from the
17th to early 20th century.

The dataset is made available by Google LLC under a Creative Commons
Attribution Non-Commercial Share-Alike 4.0 (CC BY-NC-SA 4.0) license.

This loader supports MAESTRO version 2.

For more details, please visit: https://magenta.tensorflow.org/datasets/maestro

* **License:** Creative Commons Attribution Non-Commercial Share-Alike 4.0 (CC BY-NC-SA 4.0).
* **Downloadable Remotes:** ``all``, ``midi``, ``metadata``
* **YAML File:** :download:`maestro.yaml<../dataset_yamls/maestro.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{
        hawthorne2018enabling,
        title={Enabling Factorized Piano Music Modeling and Generation with the {MAESTRO} Dataset},
        author={Curtis Hawthorne and Andriy Stasyuk and Adam Roberts and Ian Simon and Cheng-Zhi Anna Huang and Sander Dieleman and Erich Elsen and Jesse Engel and Douglas Eck},
        booktitle={International Conference on Learning Representations},
        year={2019},
        url={https://openreview.net/forum?id=r1lYRjC9F7},
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/maestro.yaml
      :language: yaml

mdb_stem_synth
--------------


* **Annotations:** ``F0Data``


**About this dataset:**
   
MDB-stem-synth contains 230 solo stems (tracks)
from the MedleyDB dataset spanning a variety of
musical instruments and voices, which have been
resynthesized to obtain a perfect f0 annotation
using the analysis/synthesis method described in
the referenced publication of Salamon et al.
(ISMIR 2017).

For more details and download info,
please visit:
- https://synthdatasets.weebly.com/mdb-stem-synth.html
- https://zenodo.org/record/1481172

* **License:** Attribution-NonCommercial 4.0 International
* **Downloadable Remotes:** ``mdb_stem_synth``
* **YAML File:** :download:`mdb_stem_synth.yaml<../dataset_yamls/mdb_stem_synth.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{salamon2017analysis,
        title={An analysis/synthesis framework for automatic f0 annotation of multitrack datasets},
        author={Salamon, Justin and Bittner, Rachel M and Bonada, Jordi and Bosch, Juan J and G{'o}mez Guti{'e}rrez, Emilia and Bello, Juan Pablo},
        booktitle={International Society for Music Information Retrieval Conference},
        year={2017},
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/mdb_stem_synth.yaml
      :language: yaml

medley_solos_db
---------------


* **Annotations:** ``Instrument``


**About this dataset:**
   
Medley-solos-DB Dataset Loader.


    Medley-solos-DB is a cross-collection dataset for automatic musical instrument
    recognition in solo recordings. It consists of a training set of 3-second audio
    clips, which are extracted from the MedleyDB dataset (Bittner et al., ISMIR 2014)
    as well as a test set of 3-second clips, which are extracted from the solosDB
    dataset (Essid et al., IEEE TASLP 2009).

    Each of these clips contains a single instrument among a taxonomy of eight:

        0. clarinet,
        1. distorted electric guitar,
        2. female singer,
        3. flute,
        4. piano,
        5. tenor saxophone,
        6. trumpet, and
        7. violin.

    The Medley-solos-DB dataset is the dataset that is used in the benchmarks of
    musical instrument recognition in the publications of Lostanlen and Cella
    (ISMIR 2016) and Andén et al. (IEEE TSP 2019).

* **License:** Creative Commons Attribution 4.0 International.
* **Downloadable Remotes:** ``annotations``, ``audio``
* **YAML File:** :download:`medley_solos_db.yaml<../dataset_yamls/medley_solos_db.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{lostanlen2019ismir,
          title={Deep Convolutional Networks in the Pitch Spiral for Musical Instrument Recognition},
          author={Lostanlen, Vincent and Cella, Carmine Emanuele},
          booktitle={International Society of Music Information Retrieval (ISMIR)},
          year={2016}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/medley_solos_db.yaml
      :language: yaml

medleydb_melody
---------------


* **Annotations:** ``F0Data``, ``Instrument``, ``MultiF0Data``


**About this dataset:**
   
MedleyDB melody is a subset of the MedleyDB dataset containing only
the mixtures and melody annotations.

MedleyDB is a dataset of annotated, royalty-free multitrack recordings.
MedleyDB was curated primarily to support research on melody extraction,
addressing important shortcomings of existing collections. For each song
we provide melody f0 annotations as well as instrument activations for
evaluating automatic instrument recognition.

For more details, please visit: https://medleydb.weebly.com

* **License:** Creative Commons Attribution Non-Commercial Share-Alike 4.0 (CC BY-NC-SA 4.0).
* **Downloadable Remotes:** *No direct download available*
* **YAML File:** :download:`medleydb_melody.yaml<../dataset_yamls/medleydb_melody.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   To download this dataset, visit:
       https://zenodo.org/record/2628782#.XKZdABNKh24
       and request access.

       Once downloaded, unzip the file MedleyDB-Melody.zip
       and copy the result to:
       {}

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{bittner2014medleydb,
          Author = {Bittner, Rachel M and Salamon, Justin and Tierney, Mike and Mauch, Matthias and Cannam, Chris and Bello, Juan P},
          Booktitle = {International Society of Music Information Retrieval (ISMIR)},
          Month = {October},
          Title = {Medley{DB}: A Multitrack Dataset for Annotation-Intensive {MIR} Research},
          Year = {2014}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/medleydb_melody.yaml
      :language: yaml

medleydb_pitch
--------------


* **Annotations:** ``F0Data``, ``Instrument``, ``NoteData``


**About this dataset:**
   
MedleyDB Pitch is a pitch-tracking subset of the MedleyDB dataset
containing only f0-annotated, monophonic stems.

MedleyDB is a dataset of annotated, royalty-free multitrack recordings.
MedleyDB was curated primarily to support research on melody extraction,
addressing important shortcomings of existing collections. For each song
we provide melody f0 annotations as well as instrument activations for
evaluating automatic instrument recognition.

For more details, please visit: https://medleydb.weebly.com

* **License:** Creative Commons Attribution Non-Commercial Share-Alike 4.0 (CC BY-NC-SA 4.0).
* **Downloadable Remotes:** ``notes_pyin``
* **YAML File:** :download:`medleydb_pitch.yaml<../dataset_yamls/medleydb_pitch.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   To download this dataset, visit:
       https://zenodo.org/record/2620624#.XKZc7hNKh24
       and request access.

       Once downloaded, unzip the file MedleyDB-Pitch.zip
       and copy the result to:
       {}

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{bittner2014medleydb,
          Author = {Bittner, Rachel M and Salamon, Justin and Tierney, Mike and Mauch, Matthias and Cannam, Chris and Bello, Juan P},
          Booktitle = {International Society of Music Information Retrieval (ISMIR)},
          Month = {October},
          Title = {Medley{DB}: A Multitrack Dataset for Annotation-Intensive {MIR} Research},
          Year = {2014}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/medleydb_pitch.yaml
      :language: yaml

mridangam_stroke
----------------


* **Annotations:** *None*


**About this dataset:**
   
The Mridangam Stroke dataset is a collection of individual strokes of
the Mridangam in various tonics. The dataset comprises of 10 different
strokes played on Mridangams with 6 different tonic values. The audio
examples were recorded from a professional Carnatic percussionist in a
semi-anechoic studio conditions by Akshay Anantapadmanabhan.

Total audio samples: 6977

Used microphones:

* SM-58 microphones
* H4n ZOOM recorder.

Audio specifications:

* Sampling frequency: 44.1 kHz
* Bit-depth: 16 bit
* Audio format: .wav

The dataset can be used for training models for each Mridangam stroke. The
presentation of the dataset took place on the IEEE International Conference
on Acoustics, Speech and Signal Processing (ICASSP 2013) on May 2013.
You can read the full publication here: https://repositori.upf.edu/handle/10230/25756

Mridangam Dataset is annotated by storing the informat of each track in their filenames.
The structure of the filename is:

.. code-block:: bash

    <TrackID>__<AuthorName>__<StrokeName>-<Tonic>-<InstanceNum>.wav

The dataset is made available by CompMusic under a Creative Commons
Attribution 3.0 Unported (CC BY 3.0) License.

For more details, please visit: https://compmusic.upf.edu/mridangam-stroke-dataset

* **License:** Creative Commons Attribution 3.0 Unported (CC BY 3.0) License.
* **Downloadable Remotes:** ``remote_data``
* **YAML File:** :download:`mridangam_stroke.yaml<../dataset_yamls/mridangam_stroke.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @article{Anantapadmanabhan2013,
          author = {Anantapadmanabhan, Akshay and Bellur, Ashwin and Murthy, Hema A.},
          doi = {10.1109/ICASSP.2013.6637633},
          isbn = {9781479903566},
          issn = {15206149},
          journal = {ICASSP, IEEE International Conference on Acoustics, Speech and Signal Processing - Proceedings},
          keywords = {Hidden Markov models, Modal Analysis, Mridangam, Non-negative Matrix Factorization,
          automatic transcription},
          pages = {181--185},
          title = {{Modal analysis and transcription of strokes of the mridangam using non-negative matrix factorization}},
          year = {2013}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/mridangam_stroke.yaml
      :language: yaml

mtg_jamendo_autotagging_moodtheme
---------------------------------


* **Annotations:** *None*


**About this dataset:**
   
MTG jamendo autotagging moodtheme Dataset Loader


    The MTG Jamendo autotagging mood/theme Dataset is a new open dataset for music auto-tagging. It
    is built using music available at Jamendo under Creative Commons licenses and tags provided by content uploaders. The
    dataset contains 18,486 full audio tracks with 195 tags from mood/theme. It is provided
    five fixed data splits for a better and fair replication. For more information please visit: https://github.com/MTG/mtg-jamendo-dataset .

    The moodtheme tags are:

    action, adventure, advertising, ambiental, background, ballad, calm, children, christmas, commercial, cool,
    corporate, dark, deep, documentary, drama, dramatic, dream, emotional, energetic, epic, fast, film, fun, funny,
    game, groovy, happy, heavy, holiday, hopeful, horror, inspiring, love, meditative, melancholic, mellow, melodic,
    motivational, movie, nature, party, positive, powerful, relaxing, retro, romantic, sad, sexy, slow, soft,
    soundscape, space, sport, summer, trailer, travel, upbeat, uplifting.

    Emotion and theme recognition is a popular task in music information retrieval that is relevant for music search and
    recommendation systems.

    This task involves the prediction of moods and themes conveyed by a music track, given the raw audio. The examples
    of moods and themes are: happy, dark, epic, melodic, love, film, space etc. The full list is available at:
    https://github.com/mir-dataset-loaders/mirdata/pull/505 Each track is tagged with at least one
    tag that serves as a ground-truth.

    Acknowledgments

    This work was funded by the predoctoral grant MDM-2015-0502-17-2 from the Spanish Ministry of Economy and
    Competitiveness linked to the Maria de Maeztu Units of Excellence Programme (MDM-2015-0502).

    This work has received funding from the European Union's Horizon 2020 research and innovation programme under the
    Marie Skłodowska-Curie grant agreement No. 765068 "MIP-Frontiers".

    This work has received funding from the European Union's Horizon 2020 research and innovation programme under
    grant agreement No 688382 "AudioCommons".

* **License:** Creative Commons Attribution NonCommercial Share Alike 4.0 International.
* **Downloadable Remotes:** ``metadata``
* **YAML File:** :download:`mtg_jamendo_autotagging_moodtheme.yaml<../dataset_yamls/mtg_jamendo_autotagging_moodtheme.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   The audio files can be downloaded following the path described in https://github.com/MTG/mtg-jamendo-dataset#downloading-the-data

   ::

    
       To download audio, unpack and validate all tar archives:
    
       .. code-block:: console

             mkdir /path/to/download
             python3 scripts/download/download.py --dataset autotagging_moodtheme --type audio /path/to/download --unpack --remove
    
       Later add the files to a folder into mir_datasets called audio/ with the following structure:
           > mtg_jamendo_autotagging_moodtheme/
               > audios/
                   > 00/
                   ...
                   > 99/

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @conference {bogdanov2019mtg,
          author = "Bogdanov, Dmitry and Won, Minz and Tovstogan, Philip and Porter, Alastair and Serra, Xavier",
          title = "The MTG-Jamendo Dataset for Automatic Music Tagging",
          booktitle = "Machine Learning for Music Discovery Workshop, International Conference on Machine Learning (ICML 2019)",
          year = "2019",
          address = "Long Beach, CA, United States",
          url = "http://hdl.handle.net/10230/42015"
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/mtg_jamendo_autotagging_moodtheme.yaml
      :language: yaml

openmic2018
-----------


* **Annotations:** ``Instrument``


**About this dataset:**
   
OpenMIC-2018 is a dataset of 20000 excerpts of polyphonic audio recordings
in the Free Music Archive (FMA).
This dataset was produced by Spotify and New York University.
The collection has been partially annotated for the presence or absence of
20 instrument categories by workers on a crowd-sourcing platform.

Each excerpt is 10 seconds long, and no two excerpts come from the same
recording.

Each of the 20 instrument classes is guaranteed to have at least 500
positive examples and 1500 observations (positive or negative) in total.
The style and genre of recordings is mixed and biased with respect to
the FMA, but designed to ensure sufficient representation of each
instrument category.

Note that the excerpts are partially annotated: only some of the instrument
labels will be observed for any track, and many are unobserved.
Annotations include a confidence rating derived from the inter-annotator
agreement on the track.
Raw (disaggregated) annotations are also provided.

In addition to raw audio, pre-computed features generated by the
VGGish model are provided.

A pre-registered partition of the data has been constructed to ensure
reproducible evaluation with approximately balanced class presentations.

All excerpts are permissively licensed (Creative Commons or Public Domain).

For more details, please visit: https://zenodo.org/record/1432913

* **License:** Creative Commons Attribution 4.0 International
* **Downloadable Remotes:** ``remote_data``
* **YAML File:** :download:`openmic2018.yaml<../dataset_yamls/openmic2018.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{DBLP:conf/ismir/HumphreyDM18,
        author    = {Eric Humphrey and
                     Simon Durand and
                     Brian McFee},
        editor    = {Emilia G{'{o}}mez and
                     Xiao Hu and
                     Eric Humphrey and
                     Emmanouil Benetos},
        title     = {OpenMIC-2018: An Open Data-set for Multiple Instrument Recognition},
        booktitle = {Proceedings of the 19th International Society for Music Information
                     Retrieval Conference, {ISMIR} 2018, Paris, France, September 23-27,
                     2018},
        pages     = {438--444},
        year      = {2018},
        url       = {http://ismir2018.ircam.fr/doc/pdfs/248\_Paper.pdf},
        timestamp = {Thu, 12 Mar 2020 11:33:14 +0100},
        biburl    = {https://dblp.org/rec/conf/ismir/HumphreyDM18.bib},
        bibsource = {dblp computer science bibliography, https://dblp.org}
      },
      @dataset{humphrey_eric_j_2018_1432913,
        author       = {Humphrey, Eric J. and
                        Durand, Simon and
                        McFee, Brian},
        title        = {OpenMIC-2018},
        month        = sep,
        year         = 2018,
        publisher    = {Zenodo},
        version      = {v1.0.0},
        doi          = {10.5281/zenodo.1432913},
        url          = {https://doi.org/10.5281/zenodo.1432913}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/openmic2018.yaml
      :language: yaml

orchset
-------


* **Annotations:** ``F0Data``, ``Instrument``


**About this dataset:**
   
Orchset is intended to be used as a dataset for the development and
evaluation of melody extraction algorithms. This collection contains
64 audio excerpts focused on symphonic music with their corresponding
annotation of the melody.

For more details, please visit: https://zenodo.org/record/1289786#.XREpzaeZPx6

* **License:** Creative Commons Attribution Non Commercial Share Alike 4.0 International.
* **Downloadable Remotes:** ``all``
* **YAML File:** :download:`orchset.yaml<../dataset_yamls/orchset.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @article{bosch2016evaluation,
          title={Evaluation and combination of pitch estimation methods for melody extraction in symphonic classical music},
          author={Bosch, Juan J and Marxer, Ricard and G{'o}mez, Emilia},
          journal={Journal of New Music Research},
          volume={45},
          number={2},
          pages={101--117},
          year={2016},
          publisher={Taylor \& Francis}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/orchset.yaml
      :language: yaml

phenicx_anechoic
----------------


* **Annotations:** ``NoteData``


**About this dataset:**
   
This dataset includes audio and annotations useful for tasks as score-informed source separation, score following, multi-pitch estimation, transcription or instrument detection, in the context of symphonic music:
M. Miron, J. Carabias-Orti, J. J. Bosch, E. Gómez and J. Janer, "Score-informed source separation for multi-channel orchestral recordings", Journal of Electrical and Computer Engineering (2016))"

We do not provide the original audio files, which can be found at the web page hosted by Aalto University. However, with their permission we distribute the denoised versions for some of the anechoic orchestral recordings. The original dataset was introduced in:
Pätynen, J., Pulkki, V., and Lokki, T., "Anechoic recording system for symphony orchestra," Acta Acustica united with Acustica, vol. 94, nr. 6, pp. 856-865, November/December 2008.

Additionally, we provide the associated musical note onset and offset annotations, and the Roomsim configuration files used to generate the multi-microphone recordings.

The original anechoic dataset in Pätynen et al. consists of four passages of symphonic music from the Classical and Romantic periods. This work presented a set of anechoic recordings for each of the instruments, which were then synchronized between them so that they could later be combined to a mix of the orchestra. In order to keep the evaluation setup consistent between the four pieces, we selected the following instruments: violin, viola, cello, double bass, oboe, flute, clarinet, horn, trumpet and bassoon. A list of the characteristics of the four pieces can be found below:

Mozart
- duration: 3min 47s
- period: classical
- no. sources: 8
- total no. instruments: 10
- max. instruments/source: 2

Beethoven
- duration: 3min 11s
- period: classical
- no. sources: 10
- total no. instruments: 20
- max. instruments/source: 4

Beethoven
- duration: 2min 12s
- period: romantic
- no. sources: 10
- total no. instruments: 30
- max. instruments/source: 4

Bruckner
- duration: 1min 27s
- period: romantic
- no. sources: 10
- total no. instruments: 39
- max. instruments/source: 12

For more details, please visit: https://www.upf.edu/web/mtg/phenicx-anechoic

* **License:** Creative Commons Attribution Non Commercial Share Alike 4.0 International
* **Downloadable Remotes:** ``all``
* **YAML File:** :download:`phenicx_anechoic.yaml<../dataset_yamls/phenicx_anechoic.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @article{miron2016score,
        title={Score-informed source separation for multichannel orchestral recordings},
        author={Miron, Marius and Carabias-Orti, Julio J and Bosch, Juan J and G{'o}mez, Emilia and Janer, Jordi},
        journal={Journal of Electrical and Computer Engineering},
        volume={2016},
        year={2016},
        publisher={Hindawi}
      }
      @article{patynen2008anechoic,
        title={Anechoic recording system for symphony orchestra},
        author={P{"a}tynen, Jukka and Pulkki, Ville and Lokki, Tapio},
        journal={Acta Acustica united with Acustica},
        volume={94},
        number={6},
        pages={856--865},
        year={2008},
        publisher={S. Hirzel Verlag}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/phenicx_anechoic.yaml
      :language: yaml

queen
-----


* **Annotations:** ``SectionData``, ``KeyData``, ``ChordData``


**About this dataset:**
   
Queen Dataset includes chord, key, and segmentation
annotations for 51 Queen songs. Details can be found in http://matthiasmauch.net/_pdf/mauch_omp_2009.pdf and
http://isophonics.net/content/reference-annotations-queen.

The CDs used in this dataset are:
Queen: Greatest Hits I, Parlophone, 0777 7 8950424
Queen: Greatest Hits II, Parlophone, CDP 7979712
Queen: Greatest Hits III, Parlophone, 7243 52389421

In the progress of labelling the chords, C4DM researchers used the following literature to verify their judgements:

Queen, Greatest Hits I, International Music Publications Ltd, London, ISBN 0-571-52828-7

Queen, Greatest Hits II, Queen Music Ltd./EMI Music Publishing (Barnes Music Engraving), ISBN 0-86175-465-4

Acknowledgements
We'd like to thank our student annotators:

Eric Gyingy
Diako Rasoul
Felix Stiller
Helena du Toit
Vinh Ton
Chuks Chiejine

* **License:** Unfortunately we couldn't find the license information for Queen dataset.
* **Downloadable Remotes:** ``annotations``
* **YAML File:** :download:`queen.yaml<../dataset_yamls/queen.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   Unfortunately the audio files of Queen dataset are not available

   ::

           for download. If you have Queen dataset, place the contents into
           a folder called Queen with the following structure:
               > Queen/
                   > annotations/
                   > audio/
           and copy Queen folder to {}

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{mauch2009beatles,
          title={OMRAS2 metadata project 2009},
          author={Mauch, Matthias and Cannam, Chris and Davies, Matthew and Dixon, Simon and Harte,
          Christopher and Kolozali, Sefki and Tidhar, Dan and Sandler, Mark},
          booktitle={12th International Society for Music Information Retrieval Conference},
          year={2009},
          series = {ISMIR}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/queen.yaml
      :language: yaml

rwc_classical
-------------


* **Annotations:** ``BeatData``, ``SectionData``


**About this dataset:**
   
The Classical Music Database consists of 50 pieces

* Symphonies: 4 pieces
* Concerti: 2 pieces
* Orchestral music: 4 pieces
* Chamber music: 10 pieces
* Solo performances: 24 pieces
* Vocal performances: 6 pieces

**A note about the Beat annotations:**

- 48 corresponds to the duration of a quarter note (crotchet)
- 24 corresponds to the duration of an eighth note (quaver)
- 384 corresponds to the position of a downbeat

In 4/4 time signature, they correspond as follows:

.. code-block:: latex

    384: 1st beat in a measure (i.e., downbeat position)
    48: 2nd beat
    96: 3rd beat
    144 4th beat

In 3/4 time signature, they correspond as follows:

.. code-block:: latex

    384: 1st beat in a measure (i.e., downbeat position)
    48: 2nd beat
    96: 3rd beat

In 6/8 time signature, they correspond as follows:

.. code-block:: latex

    384: 1st beat in a measure (i.e., downbeat position)
    24: 2nd beat
    48: 3rd beat
    72: 4th beat
    96: 5th beat
    120: 6th beat

For more details, please visit: https://staff.aist.go.jp/m.goto/RWC-MDB/rwc-mdb-c.html

* **License:** From the dataset's owner webpage: 'Users who have submitted the Pledge and received authorization may freely use the database for research purposes without facing the usual copyright restrictions, but all of the copyrights and neighboring rights connected with this database belong to the National Institute of Advanced Industrial Science and Technology and are managed by the RWC Music Database Administrator. Persons or organizations that have not submitted a Pledge and that have not received authorization may not use the database.' See https://staff.aist.go.jp/m.goto/RWC-MDB/ for more details.
* **Downloadable Remotes:** ``annotations_beat``, ``annotations_sections``, ``metadata``
* **YAML File:** :download:`rwc_classical.yaml<../dataset_yamls/rwc_classical.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   Unfortunately the audio files of the RWC-Classical dataset are not available

   ::

       for download. If you have the RWC-Classical dataset, place the contents into a
       folder called RWC-Classical with the following structure:
           > RWC-Classical/
               > annotations/
               > audio/rwc-c-m0i with i in [1 .. 6]
               > metadata-master/
       and copy the RWC-Classical folder to {}

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{goto2002rwc,
        title={RWC Music Database: Popular, Classical and Jazz Music Databases.},
        author={Goto, Masataka and Hashiguchi, Hiroki and Nishimura, Takuichi and Oka, Ryuichi},
        booktitle={3rd International Society for Music Information Retrieval Conference},
        year={2002},
        series={ISMIR},
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/rwc_classical.yaml
      :language: yaml

rwc_jazz
--------


* **Annotations:** ``BeatData``, ``Instrument``, ``SectionData``


**About this dataset:**
   
RWC Jazz Dataset Loader.


    The Jazz Music Database consists of 50 pieces:

    - **Instrumentation variations:** 35 pieces (5 pieces × 7 instrumentations).

        The instrumentation-variation pieces were recorded to obtain different versions
        of the same piece; i.e., different arrangements performed by different player
        instrumentations. Five standard-style jazz pieces were originally composed
        and then performed in modern-jazz style using the following seven instrumentations:

        1. Piano solo
        2. Guitar solo
        3. Duo: Vibraphone + Piano, Flute + Piano, and Piano + Bass
        4. Piano trio: Piano + Bass + Drums
        5. Piano trio + Trumpet or Tenor saxophone
        6. Octet: Piano trio + Guitar + Alto saxophone + Baritone saxophone + Tenor saxophone × 2
        7. Piano trio + Vibraphone or Flute

    - **Style variations:** 9 pieces

        The style-variation pieces were recorded to represent various styles of jazz.
        They include four well-known public-domain pieces and consist of

        1. Vocal jazz: 2 pieces (including "Aura Lee")
        2. Big band jazz: 2 pieces (including "The Entertainer")
        3. Modal jazz: 2 pieces
        4. Funky jazz: 2 pieces (including "Silent Night")
        5. Free jazz: 1 piece (including "Joyful, Joyful, We Adore Thee")

    - **Fusion (crossover):** 6 pieces

        The fusion pieces were recorded to obtain music that combines elements of jazz
        with other styles such as popular, rock, and latin. They include music with an
        eighth-note feel, music with a sixteenth-note feel, and Latin jazz music.

    For more details, please visit: https://staff.aist.go.jp/m.goto/RWC-MDB/rwc-mdb-j.html

* **License:** From the dataset's owner webpage: 'Users who have submitted the Pledge and received authorization may freely use the database for research purposes without facing the usual copyright restrictions, but all of the copyrights and neighboring rights connected with this database belong to the National Institute of Advanced Industrial Science and Technology and are managed by the RWC Music Database Administrator. Persons or organizations that have not submitted a Pledge and that have not received authorization may not use the database.' See https://staff.aist.go.jp/m.goto/RWC-MDB/ for more details.
* **Downloadable Remotes:** ``metadata``, ``annotations_beat``, ``annotations_sections``
* **YAML File:** :download:`rwc_jazz.yaml<../dataset_yamls/rwc_jazz.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   Unfortunately the audio files of the RWC-Jazz dataset are not available

   ::

       for download. If you have the RWC-Jazz dataset, place the contents into a
       folder called RWC-Jazz with the following structure:
           > RWC-Jazz/
               > annotations/
               > audio/rwc-j-m0i with i in [1 .. 4]
               > metadata-master/
       and copy the RWC-Jazz folder to {}

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{goto2002rwc,
        title={RWC Music Database: Popular, Classical and Jazz Music Databases.},
        author={Goto, Masataka and Hashiguchi, Hiroki and Nishimura, Takuichi and Oka, Ryuichi},
        booktitle={3rd International Society for Music Information Retrieval Conference},
        year={2002},
        series={ISMIR},
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/rwc_jazz.yaml
      :language: yaml

rwc_popular
-----------


* **Annotations:** ``BeatData``, ``ChordData``, ``TempoData``, ``EventData``, ``SectionData``, ``Instrument``


**About this dataset:**
   
The Popular Music Database consists of 100 songs — 20 songs with English lyrics
performed in the style of popular music typical of songs on the American hit
charts in the 1980s, and 80 songs with Japanese lyrics performed in the style of
modern Japanese popular music typical of songs on the Japanese hit charts in
the 1990s.

For more details, please visit: https://staff.aist.go.jp/m.goto/RWC-MDB/rwc-mdb-p.html

* **License:** From the dataset's owner webpage: 'Users who have submitted the Pledge and received authorization may freely use the database for research purposes without facing the usual copyright restrictions, but all of the copyrights and neighboring rights connected with this database belong to the National Institute of Advanced Industrial Science and Technology and are managed by the RWC Music Database Administrator. Persons or organizations that have not submitted a Pledge and that have not received authorization may not use the database.' See https://staff.aist.go.jp/m.goto/RWC-MDB/ for more details.
* **Downloadable Remotes:** ``metadata``, ``annotations_beat``, ``annotations_sections``, ``annotations_chords``, ``annotations_vocal_act``
* **YAML File:** :download:`rwc_popular.yaml<../dataset_yamls/rwc_popular.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   Unfortunately the audio files of the RWC-Popular dataset are not available

   ::

       for download. If you have the RWC-Popular dataset, place the contents into a
       folder called RWC-Popular with the following structure:
           > RWC-Popular/
               > annotations/
               > audio/rwc-p-m0i with i in [1 .. 7]
               > metadata-master/
       and copy the RWC-Popular folder to {}

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{goto2002rwc,
        title={RWC Music Database: Popular, Classical and Jazz Music Databases.},
        author={Goto, Masataka and Hashiguchi, Hiroki and Nishimura, Takuichi and Oka, Ryuichi},
        booktitle={3rd International Society for Music Information Retrieval Conference},
        year={2002},
        series={ISMIR},
        note={Cite this if using audio, beat or section annotations},
      }
      @inproceedings{cho2011feature,
        title={A feature smoothing method for chord recognition using recurrence plots},
        author={Cho, Taemin and Bello, Juan P},
        booktitle={12th International Society for Music Information Retrieval Conference},
        year={2011},
        series={ISMIR},
        note={Cite this if using chord annotations},
      }
      @inproceedings{mauch2011timbre,
        title={Timbre and Melody Features for the Recognition of Vocal Activity and Instrumental Solos in Polyphonic Music.},
        author={Mauch, Matthias and Fujihara, Hiromasa and Yoshii, Kazuyoshi and Goto, Masataka},
        booktitle={ISMIR},
        year={2011},
        series={ISMIR},
        note={Cite this if using vocal-instrumental activity annotations},
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/rwc_popular.yaml
      :language: yaml

salami
------


* **Annotations:** ``SectionData``


**About this dataset:**
   
The SALAMI dataset contains Structural Annotations of a Large Amount of Music
Information: the public portion contains over 2200 annotations of over 1300
unique tracks.

NB: mirdata relies on the **corrected** version of the 2.0 annotations:
Details can be found at https://github.com/bmcfee/salami-data-public/tree/hierarchy-corrections and
https://github.com/DDMAL/salami-data-public/pull/15.

For more details, please visit: https://github.com/DDMAL/salami-data-public

* **License:** This data is released under a Creative Commons 0 license, effectively dedicating it to the public domain. More information about this dedication and your rights, please see the details here: http://creativecommons.org/publicdomain/zero/1.0/ and http://creativecommons.org/publicdomain/zero/1.0/legalcode.
* **Downloadable Remotes:** ``annotations``
* **YAML File:** :download:`salami.yaml<../dataset_yamls/salami.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   Unfortunately the audio files of the Salami dataset are not available

   ::

       for download. If you have the Salami dataset, place the contents into a
       folder called Salami with the following structure:
           > Salami/
               > salami-data-public-hierarchy-corrections/
               > audio/
       and copy the Salami folder to {}

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{smith2011salami,
          title={Design and creation of a large-scale database of structural annotations.},
          author={Smith, Jordan Bennett Louis and Burgoyne, John Ashley and
                Fujinaga, Ichiro and De Roure, David and Downie, J Stephen},
          booktitle={12th International Society for Music Information Retrieval Conference},
          year={2011},
          series = {ISMIR},
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/salami.yaml
      :language: yaml

saraga_carnatic
---------------


* **Annotations:** ``LyricData``, ``F0Data``, ``TempoData``, ``SectionData``, ``KeyData``


**About this dataset:**
   
This dataset contains time aligned melody, rhythm and structural annotations of Carnatic Music tracks, extracted
from the large open Indian Art Music corpora of CompMusic.

The dataset contains the following manual annotations referring to audio files:

- Section and tempo annotations stored as start and end timestamps together with the name of the section and
  tempo during the section (in a separate file)
- Sama annotations referring to rhythmic cycle boundaries stored as timestamps.
- Phrase annotations stored as timestamps and transcription of the phrases using solfège symbols
  ({S, r, R, g, G, m, M, P, d, D, n, N}).
- Audio features automatically extracted and stored: pitch and tonic.
- The annotations are stored in text files, named as the audio filename but with the respective extension at the
  end, for instance: "Bhuvini Dasudane.tempo-manual.txt".

The dataset contains a total of 249 tracks.
A total of 168 tracks have multitrack audio.

The files of this dataset are shared with the following license:
Creative Commons Attribution Non Commercial Share Alike 4.0 International

Dataset compiled by: Bozkurt, B.; Srinivasamurthy, A.; Gulati, S. and Serra, X.

For more information about the dataset as well as IAM and annotations, please refer to:
https://mtg.github.io/saraga/, where a really detailed explanation of the data and annotations is published.

* **License:** Creative Commons Attribution Non Commercial Share Alike 4.0 International.
* **Downloadable Remotes:** ``all``
* **YAML File:** :download:`saraga_carnatic.yaml<../dataset_yamls/saraga_carnatic.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @dataset{bozkurt_b_2018_4301737,
        author       = {Bozkurt, B. and
                        Srinivasamurthy, A. and
                        Gulati, S. and
                        Serra, X.},
        title        = {Saraga: research datasets of Indian Art Music},
        month        = may,
        year         = 2018,
        publisher    = {Zenodo},
        version      = {1.5},
        doi          = {10.5281/zenodo.4301737},
        url          = {https://doi.org/10.5281/zenodo.4301737}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/saraga_carnatic.yaml
      :language: yaml

saraga_hindustani
-----------------


* **Annotations:** ``LyricData``, ``F0Data``, ``TempoData``, ``SectionData``, ``KeyData``


**About this dataset:**
   
This dataset contains time aligned melody, rhythm and structural annotations of Hindustani Music tracks, extracted
from the large open Indian Art Music corpora of CompMusic.

The dataset contains the following manual annotations referring to audio files:

- Section and tempo annotations stored as start and end timestamps together with the name of the section and
  tempo during the section (in a separate file)
- Sama annotations referring to rhythmic cycle boundaries stored
  as timestamps
- Phrase annotations stored as timestamps and transcription of the phrases using solfège symbols
  ({S, r, R, g, G, m, M, P, d, D, n, N})
- Audio features automatically extracted and stored: pitch and tonic.
- The annotations are stored in text files, named as the audio filename but with the respective extension at the
  end, for instance: "Bhuvini Dasudane.tempo-manual.txt".

The dataset contains a total of 108 tracks.

The files of this dataset are shared with the following license:
Creative Commons Attribution Non Commercial Share Alike 4.0 International

Dataset compiled by: Bozkurt, B.; Srinivasamurthy, A.; Gulati, S. and Serra, X.

For more information about the dataset as well as IAM and annotations, please refer to:
https://mtg.github.io/saraga/, where a really detailed explanation of the data and annotations is published.

* **License:** Creative Commons Attribution Non Commercial Share Alike 4.0 International.
* **Downloadable Remotes:** ``all``
* **YAML File:** :download:`saraga_hindustani.yaml<../dataset_yamls/saraga_hindustani.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @dataset{bozkurt_b_2018_4301737,
        author       = {Bozkurt, B. and
                        Srinivasamurthy, A. and
                        Gulati, S. and
                        Serra, X.},
        title        = {Saraga: research datasets of Indian Art Music},
        month        = may,
        year         = 2018,
        publisher    = {Zenodo},
        version      = {1.5},
        doi          = {10.5281/zenodo.4301737},
        url          = {https://doi.org/10.5281/zenodo.4301737}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/saraga_hindustani.yaml
      :language: yaml

scms
----


* **Annotations:** ``EventData``, ``F0Data``, ``KeyData``


**About this dataset:**
   
Saraga-Carnatic-Melody-Synth loader


    This dataset contains time aligned vocal melody and activations for Carnatic Music recordings, extracted
    from the Saraga Carnatic dataset. The recordings have passed through a Carnatic-aware Analysis/Synthesis framework
    to convert automatically extracted pitch tracks into ground-truth annotations. This dataset is not meant to be listened to,
    but to be used as training and evaluation data for the vocal pitch extraction research of Indian Art Music.

    The dataset contains a total of 2460 tracks, which generally have a length of 30 seconds, in some cases a bit less.
    All the tracks have vocals at some point.

    The files of this dataset are shared with the following license:
    Creative Commons Attribution Non Commercial Share Alike 4.0 International

    Dataset compiled by: Genís Plaja-Roglans, Thomas Nuttall, Lara Pearson, Xavier Serra, and Marius Miron.

    For more information about Saraga Carnatic please refer to https://mtg.github.io/saraga/.

* **License:** Creative Commons Attribution Non-Commercial Share-Alike 4.0 (CC BY-NC-SA 4.0).
* **Downloadable Remotes:** ``scms``
* **YAML File:** :download:`scms.yaml<../dataset_yamls/scms.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @article{Plaja-Roglans-2023,
        author = {Plaja-Roglans, Gen{'\i}s and Nuttall, Thomas and Pearson, Lara and Serra, Xavier and Miron, Marius},
        doi = {10.5334/tismir.137},
        journal = {Transactions of the International Society for Music Information Retrieval},
        keyword = {en_US},
        month = {Jun},
        title = {Repertoire-Specific Vocal Pitch Data Generation for Improved Melodic Analysis of Carnatic Music},
        year = {2023}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/scms.yaml
      :language: yaml

slakh
-----


* **Annotations:** ``Instrument``, ``MultiF0Data``, ``NoteData``


**About this dataset:**
   
The Synthesized Lakh (Slakh) Dataset is a dataset of multi-track audio and aligned
MIDI for music source separation and multi-instrument automatic transcription.
Individual MIDI tracks are synthesized from the Lakh MIDI Dataset v0.1 using
professional-grade sample-based virtual instruments, and the resulting audio is
mixed together to make musical mixtures.

The original release of Slakh, called Slakh2100,
contains 2100 automatically mixed tracks and accompanying, aligned MIDI files,
synthesized from 187 instrument patches categorized into 34 classes, totaling
145 hours of mixture data.

This loader supports two versions of Slakh:
- Slakh2100-redux: a deduplicated version of slakh2100 containing 1710 multitracks
- baby-slakh: a mini version with 16k wav audio and only the first 20 tracks

This dataset was created at Mitsubishi Electric Research Labl (MERL) and
Interactive Audio Lab at Northwestern University by Ethan Manilow,
Gordon Wichern, Prem Seetharaman, and Jonathan Le Roux.

For more information see http://www.slakh.com/

* **License:** Creative Commons Attribution 4.0 International
* **Downloadable Remotes:** ``2100-redux``, ``baby``
* **YAML File:** :download:`slakh.yaml<../dataset_yamls/slakh.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{manilow2019cutting,
        title={Cutting Music Source Separation Some {Slakh}: A Dataset to Study the Impact of Training Data Quality and Quantity},
        author={Manilow, Ethan and Wichern, Gordon and Seetharaman, Prem and Le Roux, Jonathan},
        booktitle={Proc. IEEE Workshop on Applications of Signal Processing to Audio and Acoustics (WASPAA)},
        year={2019},
        organization={IEEE}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/slakh.yaml
      :language: yaml

tinysol
-------


* **Annotations:** ``F0Data``, ``Instrument``


**About this dataset:**
   
TinySOL Dataset Loader.


    TinySOL is a dataset of 2913 samples, each containing a single musical note from one of 14
    different instruments:

    - Bass Tuba
    - French Horn
    - Trombone
    - Trumpet in C
    - Accordion
    - Contrabass
    - Violin
    - Viola
    - Violoncello
    - Bassoon
    - Clarinet in B-flat
    - Flute
    - Oboe
    - Alto Saxophone

    These sounds were originally recorded at Ircam in Paris (France) between 1996
    and 1999, as part of a larger project named Studio On Line (SOL). Although SOL
    contains many combinations of mutes and extended playing techniques, TinySOL
    purely consists of sounds played in the so-called "ordinary" style, and in
    absence of mute.

    TinySOL can be used for education and research purposes. In particular, it can
    be employed as a dataset for training and/or evaluating music information
    retrieval (MIR) systems, for tasks such as instrument recognition or
    fundamental frequency estimation. For this purpose, we provide an official 5-fold
    split of TinySOL as a metadata attribute. This split has been carefully balanced
    in terms of instrumentation, pitch range, and dynamics. For the sake of research
    reproducibility, we encourage users of TinySOL to adopt this split and report
    their results in terms of average performance across folds.

    We encourage TinySOL users to subscribe to the Ircam Forum so that they can
    have access to larger versions of SOL.

    For more details, please visit: https://www.orch-idea.org/

* **License:** Creative Commons Attribution 4.0 International Public License.
* **Downloadable Remotes:** ``audio``, ``annotations``
* **YAML File:** :download:`tinysol.yaml<../dataset_yamls/tinysol.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @inproceedings{cella2020preprint,
        author={Cella, Carmine Emanuele and Ghisi, Daniele and Lostanlen, Vincent and
        Lévy, Fabien and Fineberg, Joshua and Maresz, Yan},
        title={{OrchideaSOL}: {A} dataset of extended
        instrumental techniques for computer-aided orchestration},
        bootktitle={Under review},
        year={2020}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/tinysol.yaml
      :language: yaml

tonality_classicaldb
--------------------


* **Annotations:** ``KeyData``


**About this dataset:**
   
The Tonality classicalDB Dataset includes 881 classical musical pieces across different styles from s.XVII to s.XX
annotated with single-key labels.

Tonality classicalDB Dataset was created as part of:

.. code-block:: latex

    Gómez, E. (2006). PhD Thesis. Tonal description of music audio signals.
    Department of Information and Communication Technologies.

This dataset is mainly intended to assess the performance of computational key estimation algorithms in classical music.

2020 note: The audio is privates. If you don't have the original audio collection, you could create it from your private collection
because most of the recordings are well known. To this end, we provide musicbrainz metadata. Moreover, we have added the spectrum and
HPCP chromagram of each audio.

This dataset can be used with mirdata library:
https://github.com/mir-dataset-loaders/mirdata

Spectrum features have been computed as is shown here:
https://github.com/mir-dataset-loaders/mirdata-notebooks/blob/master/Tonality_classicalDB/ClassicalDB_spectrum_features.ipynb

HPCP chromagram has been computed as is shown here:
https://github.com/mir-dataset-loaders/mirdata-notebooks/blob/master/Tonality_classicalDB/ClassicalDB_HPCP_features.ipynb

Musicbrainz metadata has been computed as is shown here:
https://github.com/mir-dataset-loaders/mirdata-notebooks/blob/master/Tonality_classicalDB/ClassicalDB_musicbrainz_metadata.ipynb

* **License:** Creative Commons Attribution Non Commercial Share Alike 4.0 International.
* **Downloadable Remotes:** ``keys``, ``musicbrainz_metadata``, ``HPCPs``, ``spectrums``
* **YAML File:** :download:`tonality_classicaldb.yaml<../dataset_yamls/tonality_classicaldb.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   Unfortunately the audio files of the Tonality classicalDB dataset are not available

   ::

       for download. If you have the tonality classicalDB audio dataset, place the contents into
       a folder called classicaldb with the following structure:
           > classicaldb/
               > audio/
               > keys/
               > spectrums/
               > HPCPs/
               > musicbrainz_metadata/
       and copy the folder to {} directory

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @article{gomez2006tonal,
        title={Tonal description of music audio signals},
        author={G{'o}mez, Emilia},
        journal={Department of Information and Communication Technologies},
        year={2006}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/tonality_classicaldb.yaml
      :language: yaml

tonas
-----


* **Annotations:** ``F0Data``, ``NoteData``


**About this dataset:**
   
This dataset contains a music collection of 72 sung excerpts representative of three a cappella singing styles
(Deblas, and two variants of Martinete). It has been developed within the COFLA research project context.
The distribution is as follows:
1. 16 Deblas
2. 36 Martinete 1
3. 20 Martinete 2

This collection was built in the context of a study on similarity and style classification of flamenco a cappella
singing styles (Tonas) by the flamenco expert Dr. Joaquin Mora, Universidad de Sevilla.

We refer to (Mora et al. 2010) for a comprehensive description of the considered styles and their musical
characteristics. All 72 excerpts are monophonic, their average duration is 30 seconds and there is enough
variability for a proper evaluation of our methods, including a variety of singers, recording conditions,
presence of percussion, clapping, background voices and noise. We also provide manual melodic transcriptions,
generated by the COFLA team and Cristina López Gómez.

The annotations are represented by specifying the value (in this case, Notes and F0) at the related timestamps.
TONAS' note and F0 annotations also have "Energy" information, which refers to the average energy value through
all the frames in which a note or a F0 value is comprised.

Using this dataset:
TONAS dataset can be obtained upon request. Please refer to this link: https://zenodo.org/record/1290722 to
request access and follow the indications of the .download() method for a proper storing and organization
of the TONAS dataset.

Citing this dataset:
When TONAS is used for academic research, we would highly appreciate if scientific publications of works partly
based on the TONAS dataset quote the following publication:
- Music material: Mora, J., Gomez, F., Gomez, E., Escobar-Borrego, F.J., Diaz-Banez, J.M. (2010). Melodic
Characterization and Similarity in A Cappella Flamenco Cantes. 11th International Society for Music Information
Retrieval Conference (ISMIR 2010).
- Transcriptions: Gomez, E., Bonada, J. (in Press). Towards Computer-Assisted Flamenco Transcription: An
Experimental Comparison of Automatic Transcription Algorithms As Applied to A Cappella Singing.
Computer Music Journal.

* **License:** The TONAS dataset is offered free of charge for internal non-commercial use only. You can not redistribute it nor modify it. Dataset by COFLA team. Copyright © 2012 COFLA project, Universidad de Sevilla. Distribution rights granted to Music Technology Group, Universitat Pompeu Fabra. All Rights Reserved.
* **Downloadable Remotes:** *No direct download available*
* **YAML File:** :download:`tonas.yaml<../dataset_yamls/tonas.yaml>`


.. admonition:: Download Instructions
   :class: dropdown
   

   PLEASE READ CAREFULLY ALL THE INFORMATION SO YOU DON'T MISS ANY STEP:

   ::

           Unfortunately, the TONAS dataset is not available to be shared openly. However,
           you can request access to the dataset in the following link, providing a brief
           explanation of what your are going to use the dataset for:
           ==> https://zenodo.org/record/1290722
           Then, unzip the dataset, change the dataset name to: "tonas" (with lowercase),
           and locate it to {}. If you unzip it into a different path, please remember to set the 
           right data_home when initializing the dataset.

.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      Music material:
      @inproceedings{tonas_music,
          author = {Mora, Joaquin and Gómez, Francisco and Gómez, Emilia
                    and Borrego, Francisco Javier and Díaz-Báñez, José},
          year = {2010},
          month = {01},
          pages = {351-356},
          title = {Characterization and Similarity in A Cappella Flamenco Cantes.}
      }

      Transcriptions:
      @inproceedings{tonas_annotations,
          author = {E. {Gómez} and J. {Bonada}},
          journal = {Computer Music Journal},
          title = {Towards Computer-Assisted Flamenco Transcription: An Experimental 
                 Comparison of Automatic Transcription Algorithms as Applied to A 
                 Cappella Singing},
          year = {2013},
          volume = {37},
          number = {2},
          pages = {73-90},
          doi = {10.1162/COMJ_a_00180}}

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/tonas.yaml
      :language: yaml

vocadito
--------


* **Annotations:** ``F0Data``, ``LyricData``, ``NoteData``


**About this dataset:**
   
vocadito is a dataset of 40 short excerpts of solo, monophonic singing. The excerpts are sung in 7 different languages by singers with varying of levels of training, and are recorded on a variety of devices.

Annotations are labeled by trained musicians. For each excerpt, we provide:

frame-level f0 annotations
2 versions of note annotations (from 2 different annotators)
lyrics
language

For more details, please visit: https://zenodo.org/record/5578807

* **License:** Creative Commons Attribution 4.0 International
* **Downloadable Remotes:** ``zenodo``
* **YAML File:** :download:`vocadito.yaml<../dataset_yamls/vocadito.yaml>`


.. admonition:: BibTeX Citation
   :class: dropdown

   .. code-block:: bibtex

      @techreport{bittner2021vocadito,
            title={vocadito: A dataset of solo vocals with $f_0$, note, and lyric annotations}, 
            author={Rachel M. Bittner and Katherine Pasalo and Juan José Bosch and Gabriel Meseguer-Brocal and David Rubinstein},
            year={2021},
            institution={Spotify},
            number={2110.05580},
            note={https://arxiv.org/abs/2110.05580}
      }

.. admonition:: View Full YAML Definition
   :class: dropdown

   .. literalinclude:: ../dataset_yamls/vocadito.yaml
      :language: yaml
