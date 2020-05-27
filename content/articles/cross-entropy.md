---
title: "Cross Entropy : An intuitive explanation with Entropy and  KL-Divergence" 
slug: cross-entropy-with-entropy-and-kl-divergence
image: ./images/cross-entropy/cross-entropy.png
author: ramsane
tags: ['loss_fn', 'math']
category: misc
excerpt: Cross-Entropy is something that you see over and over in machine learning and deep learning. This article explains it from Information theory prespective and try to connect the dots. KL-Divergence is also very important and is used in Decision Trees and generative models like Variational Auto Encoders.
date:  2020-05-28
---

In machine learning and deep learning, cross entropy is used extensively as a loss function in a classification problem. In order to understand the it's intuition, we need to understand it's origin from an area of computer science called Information Theory.

In digital era, the main goal is to transfer the data reliably and efficiently from a sender to a recipient. We know that the transfer is done in bits. But the main problem is how to encode it. And most importantly how to know if that encoding is good or bad, OR how much unnecessary information that we are sending.

While sending a message, not all bits are useful. *Claude Shannon* proposed a way to measure to measure how efficient the transfer is in his paper that later became the foundation for Information theory. 

<!-- importing info banner from the components -->
import InfoBanner from '~/components/markdown/InfoBanner.vue'

<InfoBanner>
In Shannon's theory, To transmit <span class="font-semibold">one bit of information</span> means to reduce the recipient's <span class="font-semibold">uncertainty</span> by a <span class="font-semibold">factor of 2</span>
</InfoBanner>


## What is Uncertainty factor reduction?

Let's just take an example of transmitting weather information from weather station to you. We consider few cases to understand the reduction in uncertainty factor with different weather states.

#### 1. Weather being random with 2 states

In this case we assume that the weather can either be Sunny or Rainy with equal probability. 
$$
P(Sunny)=\frac{1}{2}=0.5 \hspace2em and \hspace2emP(Rainy)=\frac{1}{2}=0.5 \hspace2em
$$

These are the probabilities that we are assuming prior to the transmission. If the weather station transmits that it is going to be rainy, then according to Shannon, they(weather station)  reduced our uncertainty by a factor of 2. 

It is very important to note that we are not trying to predict anything here. The probabilities are something that we assumed from the previous data( generally ) and we are receiving the forecast information from the  weather station. All we are trying to do here is to measure how efficient the transfer is. It doesn't matter whether tomorrow that it is actually going to rain or not. 

- One other way to interpret this is before the forecast we are only 50% certain, But we are 100% certain, that means, our certainty has increased from 50% to 100%, with a factor of 2.
$$
50\%\ *\ certainty\_factor\ \rightarrow 100\%\Longrightarrow \ \boxed{certainty\_factor=2}
$$
- Another way to put this is as follows. We had 2 options out of which 1 is sunny and the other is rainy. We were not sure ( **uncertain** ) which we are going to receive from the weather station. After the forecast that it is going to be rainy, we are down to one option(rainy) from the available options(rainy and sunny). This is a reduction. Just like before we can calculate the reduction in our uncertainty as follows.

$$
\frac{2\ options}{uncertainty\_factor} \ \rightarrow 1\ option\Longrightarrow \ \boxed{uncertainty\_factor=2}
$$

<InfoBanner>
  <p>
  While calculating <span class="font-semibold">certainty factor</span>, we are multiplying the factor because we want to measure by how much our certainty factor has <span class="font-semibold">increased</span>.
  </p>
  <p class="pt-4">Similarly, while calculating the <span class="font-semibold">uncertainty factor</span>, there is a division because we want to calculate the factor by how much our uncertainty has <span class="font-semibold">reduced</span>.
  </p>
</InfoBanner>
