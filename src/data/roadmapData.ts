import { Week } from "@/types/roadmap";

export const roadmapData: Week[] = [
  {
    id: "week-1",
    number: 1,
    title: "Python & Math Foundations",
    objective: "Build the core programming and mathematical skills needed for AI/ML",
    isExpanded: true,
    topics: [
      {
        id: "w1-t1",
        title: "Python Programming Essentials",
        subTopics: [
          { id: "w1-t1-s1", title: "Variables, Data Types & Operators", resourceUrl: "https://www.kaggle.com/learn/python", completed: false },
          { id: "w1-t1-s2", title: "Control Flow & Functions", resourceUrl: "https://www.kaggle.com/learn/python", completed: false },
          { id: "w1-t1-s3", title: "Lists, Dictionaries & Sets", resourceUrl: "https://www.kaggle.com/learn/python", completed: false },
          { id: "w1-t1-s4", title: "Object-Oriented Programming", resourceUrl: "https://www.kaggle.com/learn/python", completed: false },
        ],
      },
      {
        id: "w1-t2",
        title: "NumPy & Pandas",
        subTopics: [
          { id: "w1-t2-s1", title: "NumPy Arrays & Operations", resourceUrl: "https://colab.research.google.com/", completed: false },
          { id: "w1-t2-s2", title: "Pandas DataFrames", resourceUrl: "https://www.kaggle.com/learn/pandas", completed: false },
          { id: "w1-t2-s3", title: "Data Manipulation & Cleaning", resourceUrl: "https://www.kaggle.com/learn/pandas", completed: false },
        ],
      },
      {
        id: "w1-t3",
        title: "Linear Algebra Basics",
        subTopics: [
          { id: "w1-t3-s1", title: "Vectors & Matrices", resourceUrl: "https://developers.google.com/machine-learning/crash-course", completed: false },
          { id: "w1-t3-s2", title: "Matrix Operations", resourceUrl: "https://developers.google.com/machine-learning/crash-course", completed: false },
          { id: "w1-t3-s3", title: "Eigenvalues & Eigenvectors", resourceUrl: "https://developers.google.com/machine-learning/crash-course", completed: false },
        ],
      },
    ],
  },
  {
    id: "week-2",
    number: 2,
    title: "Machine Learning Fundamentals",
    objective: "Understand core ML concepts and build your first models",
    isExpanded: false,
    topics: [
      {
        id: "w2-t1",
        title: "Supervised Learning",
        subTopics: [
          { id: "w2-t1-s1", title: "Linear Regression", resourceUrl: "https://www.kaggle.com/learn/intro-to-machine-learning", completed: false },
          { id: "w2-t1-s2", title: "Logistic Regression", resourceUrl: "https://developers.google.com/machine-learning/crash-course", completed: false },
          { id: "w2-t1-s3", title: "Decision Trees & Random Forests", resourceUrl: "https://www.kaggle.com/learn/intro-to-machine-learning", completed: false },
          { id: "w2-t1-s4", title: "Support Vector Machines", resourceUrl: "https://scikit-learn.org/stable/modules/svm.html", completed: false },
        ],
      },
      {
        id: "w2-t2",
        title: "Model Evaluation",
        subTopics: [
          { id: "w2-t2-s1", title: "Train/Test Split & Cross-Validation", resourceUrl: "https://www.kaggle.com/learn/intro-to-machine-learning", completed: false },
          { id: "w2-t2-s2", title: "Metrics: Accuracy, Precision, Recall, F1", resourceUrl: "https://developers.google.com/machine-learning/crash-course", completed: false },
          { id: "w2-t2-s3", title: "Confusion Matrix & ROC Curves", resourceUrl: "https://scikit-learn.org/stable/modules/model_evaluation.html", completed: false },
        ],
      },
      {
        id: "w2-t3",
        title: "Unsupervised Learning",
        subTopics: [
          { id: "w2-t3-s1", title: "K-Means Clustering", resourceUrl: "https://www.kaggle.com/learn/machine-learning", completed: false },
          { id: "w2-t3-s2", title: "Principal Component Analysis (PCA)", resourceUrl: "https://scikit-learn.org/stable/modules/decomposition.html", completed: false },
          { id: "w2-t3-s3", title: "Dimensionality Reduction", resourceUrl: "https://developers.google.com/machine-learning/crash-course", completed: false },
        ],
      },
    ],
  },
  {
    id: "week-3",
    number: 3,
    title: "Deep Learning & Neural Networks",
    objective: "Dive into neural networks and deep learning frameworks",
    isExpanded: false,
    topics: [
      {
        id: "w3-t1",
        title: "Neural Network Basics",
        subTopics: [
          { id: "w3-t1-s1", title: "Perceptrons & Activation Functions", resourceUrl: "https://www.kaggle.com/learn/intro-to-deep-learning", completed: false },
          { id: "w3-t1-s2", title: "Forward & Backpropagation", resourceUrl: "https://www.kaggle.com/learn/intro-to-deep-learning", completed: false },
          { id: "w3-t1-s3", title: "Loss Functions & Optimizers", resourceUrl: "https://www.kaggle.com/learn/intro-to-deep-learning", completed: false },
        ],
      },
      {
        id: "w3-t2",
        title: "Deep Learning with PyTorch/TensorFlow",
        subTopics: [
          { id: "w3-t2-s1", title: "Building Neural Networks", resourceUrl: "https://www.kaggle.com/learn/intro-to-deep-learning", completed: false },
          { id: "w3-t2-s2", title: "Training & Validation Loops", resourceUrl: "https://colab.research.google.com/", completed: false },
          { id: "w3-t2-s3", title: "Regularization & Dropout", resourceUrl: "https://www.kaggle.com/learn/intro-to-deep-learning", completed: false },
          { id: "w3-t2-s4", title: "Transfer Learning", resourceUrl: "https://www.kaggle.com/learn/computer-vision", completed: false },
        ],
      },
      {
        id: "w3-t3",
        title: "Convolutional Neural Networks",
        subTopics: [
          { id: "w3-t3-s1", title: "CNN Architecture", resourceUrl: "https://www.kaggle.com/learn/computer-vision", completed: false },
          { id: "w3-t3-s2", title: "Image Classification", resourceUrl: "https://www.kaggle.com/c/dogs-vs-cats", completed: false },
          { id: "w3-t3-s3", title: "Popular Architectures: ResNet, VGG", resourceUrl: "https://www.kaggle.com/learn/computer-vision", completed: false },
        ],
      },
    ],
  },
  {
    id: "week-4",
    number: 4,
    title: "Advanced AI & Projects",
    objective: "Explore cutting-edge AI and build real-world projects",
    isExpanded: false,
    topics: [
      {
        id: "w4-t1",
        title: "Natural Language Processing",
        subTopics: [
          { id: "w4-t1-s1", title: "Text Preprocessing & Tokenization", resourceUrl: "https://huggingface.co/learn/nlp-course", completed: false },
          { id: "w4-t1-s2", title: "Word Embeddings (Word2Vec, GloVe)", resourceUrl: "https://huggingface.co/learn/nlp-course", completed: false },
          { id: "w4-t1-s3", title: "Transformers & Attention Mechanism", resourceUrl: "https://huggingface.co/learn/nlp-course", completed: false },
          { id: "w4-t1-s4", title: "BERT & GPT Models", resourceUrl: "https://huggingface.co/", completed: false },
        ],
      },
      {
        id: "w4-t2",
        title: "Generative AI",
        subTopics: [
          { id: "w4-t2-s1", title: "Generative Adversarial Networks (GANs)", resourceUrl: "https://www.kaggle.com/learn/intro-to-deep-learning", completed: false },
          { id: "w4-t2-s2", title: "Variational Autoencoders (VAEs)", resourceUrl: "https://www.kaggle.com/learn/intro-to-deep-learning", completed: false },
          { id: "w4-t2-s3", title: "Diffusion Models", resourceUrl: "https://huggingface.co/docs/diffusers", completed: false },
        ],
      },
      {
        id: "w4-t3",
        title: "Capstone Project",
        subTopics: [
          { id: "w4-t3-s1", title: "Project Planning & Dataset Selection", resourceUrl: "https://www.kaggle.com/datasets", completed: false },
          { id: "w4-t3-s2", title: "Model Development & Training", resourceUrl: "https://colab.research.google.com/", completed: false },
          { id: "w4-t3-s3", title: "Model Explainability (SHAP)", resourceUrl: "https://shap.readthedocs.io/", completed: false },
          { id: "w4-t3-s4", title: "GitHub Portfolio Upload", resourceUrl: "https://www.kaggle.com/", completed: false },
        ],
      },
    ],
  },
];
