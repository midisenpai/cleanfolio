# Hardware Accelerated Image Stitching: GPU vs FPGA

## Overview

Image stitching is a process where two or more images with an overlapping field of view are combined. This process is commonly used to increase the field of view or image quality of a system. While this process is not particularly difficult for modern personal computers, hardware acceleration is often required to achieve real-time performance in low-power image stitching solutions.

##  Implementation

A standard image processing pipeline for image stitching involves five main steps: feature detection, feature description, feature matching, image transformation, and image mixing. Feature description is sometimes included in the feature detection algorithm, but this depends on the feature detection algorithm. In this project, the Speeded Up Robust Features(SURF) algorithm was used for feature detection. Since the SURF algorithm includes a feature description algorithm, the two logical blocks have been combined in the graphical representation. A figure outlining a basic image stitching pipeline for two image sources can be seen below.

![Abstract Image Stitching Pipeline](/projects/thesis/thesis_pipeline_abstract.png)
**Figure 1**: Image Stitching Pipeline

### Feature detection

   Feature detection is the process of detecting points which are locally unique in a consistent manner. It's important that the points detected are consistently detected in overlapping field of view images even when the images are taken from different perspectives. If feature points can be consistently detected they can be found in unique images, used for object recognition, or other advanced purposes.

### Feature description

   Feature description, otherwise known as feature classification, involves the description of the locally unique points in a manner that should be consistent regardless of noise, translation, or other factors. While some feature detection algorithms don't include a corresponding feature description algorithm, the algorithm used in this project(SURF) does.

### Feature matching

   Feature matching involves the comparison of classified feature points from multiple images to find similar points in distinct images. These matched pairs of feature points are used to calculate the transformation matrix used to transform two images to a common coordinate system. An absolute minimum of four pairs of points is necessary for this calculation, but generally more points tend to provide a better result.

### Image transformation

   The image transformation portion of the pipeline is responsible for calculating the transformation matrix required to convert both images to a common coordinate system. This process is performed using the matched pairs of feature points from the previous step and can be broken down into three steps: matched pair selection, transformation matrix calculation, and error calculation. Point selection can be performed randomly or algorithmically and involves selecting  a set of matched pairs of feature points for the calculation. Calculating the transformation matrix is commonly performed using either the homography or fundamental matrix. The homography matrix was used in this implemenation and only requires four pairs of points. Calculating an error value to associate with the calculated transformation matrix generally uses the remaining matched pairs of feature points not associated with the current iteration of the transformation matrix calculation. After calculating a number of transformation matrices and their corresponding error, the transformation matrix with the lowest error is often selected.

### Image mixing

   Image mixing uses the originally supplied images and at least the previously calculated transformation matrix. Depending on the output format of the system, the image transformation portion of the pipeline may involve additional transformations. Once both images have been appropriately transformed, the output pixel at any given location in the output frame needs to be determined. It is the responsibility of this component to make that determination.


### FPGA

### GPU
