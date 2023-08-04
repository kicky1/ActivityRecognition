# Master thesis - Using artificial neural networks to detect non-normative states in the elderly

## Table of Contents
1. [Abstract](#abstract-)
2. [Purpose of the work](#purpose-of-the-work-)

## Abstract :

The purpose of this master’s thesis is to analyze the possibility of using elements of a smart
environment, for example, an e-chair, to provide an assessment of the well-being of an elderly
person.

The set goals were fully achieved. As a final result of the work, a web application Activity
Recognition was obtained, which allows the user to undergo classification of the ECG signal for
prediction of one of three classes coughing, sitting and speaking. In addition, the user can check
detailed data related to the classification, such as the number of all classified heartbeats or data
regarding the time of the classification performed.

The paper describes the origins of artificial intelligence and the ways and areas in which
artificial neural networks are used. In order to ensure the best possible selection of a neural
network model, articles related to the topic of using artificial neural networks in the classification
of ECG signals were analyzed. Models such as MLP, RBM, ANN, LSTM and CNN were described,
presenting both their architecture and features, and then it was decided to choose CNN 2D.
The web application was written using two different programming languages, TypeScript was
used to create the visual layer, while Python was used to create the server layer. Through expe-
riments consisting of selecting appropriate parameters, performing filtering, and comparing lear-
ned models for different numbers of cardiac cycles in the image, VGGNet16 was selected, with
an accuracy of 77.98% on the validation set and 68.55% on the test set. In order to reduce the
occurrence of training destabilization, an SGD optimizer with a learning rate of 0.0001 and a de-
cay equal to the quotient of 0.0001 and the number of epochs was used. Augmentation was also
carried out using the function ImageDataGenerator, where parameters such as shear angle, width
shift range and height shift range were used. The selection of the final network was done using
data obtained from the error matrix, where only for the VGGNet16 model the sensitivity value
for the speech class exceeded 60. Each model was validated using ROC-AUC, Cohen Kappa,
Balanced Accurancy and Jaccard metrics.

## Purpose of the work:

This particular work examines the information on the use of artificial neural networks and machine 
learning techniques in medicine. It describes examples of applying artificial neural networks to 
detect abnormal and normal patient conditions.

The main objective of the master's thesis is to analyze the possibilities of utilizing elements of 
intelligent environments, such as e-chairs or e-bathtubs, to provide an assessment of well-being for 
elderly individuals. The developed system with a trained model of artificial neural networks is tasked
with classifying patient states at the moment of their reading and analyzing the results in terms of the 
accuracy of predicting these states. The classification process involves simultaneous measurement of the 
patient's electrocardiogram (EKG) while they are on the e-chair and then transmitting the recorded signal 
in a .csv file to the created internet application, Activity Recognition. Upon approval of the file transmission, 
the signal is classified, and the user receives information about the classified state along with an EKG image.

