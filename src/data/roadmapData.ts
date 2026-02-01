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
          { id: "w1-t1-s1", title: "Variables, Data Types & Operators", description: "Learn Python basics: variables, strings, numbers, and how to perform operations", resourceUrl: "https://www.kaggle.com/learn/python", completed: false },
          { id: "w1-t1-s2", title: "Control Flow & Functions", description: "Master if/else statements, loops, and creating reusable functions", resourceUrl: "https://www.kaggle.com/learn/python", completed: false },
          { id: "w1-t1-s3", title: "Lists, Dictionaries & Sets", description: "Work with Python's core data structures for organizing information", resourceUrl: "https://www.kaggle.com/learn/python", completed: false },
          { id: "w1-t1-s4", title: "Object-Oriented Programming", description: "Understand classes, objects, inheritance, and encapsulation in Python", resourceUrl: "https://youtu.be/6soT3DMBJGQ?si=BVirdcepfgnKkce5", completed: false },
        ],
      },
      {
        id: "w1-t2",
        title: "NumPy & Pandas",
        subTopics: [
          { id: "w1-t2-s1", title: "NumPy Arrays & Operations", description: "Learn numerical computing with efficient array operations", resourceUrl: "https://numpy.org/doc/stable/user/absolute_beginners.html", completed: false },
          { id: "w1-t2-s2", title: "Pandas DataFrames", description: "Master data manipulation with tables, filtering, and aggregation", resourceUrl: "https://www.kaggle.com/learn/pandas", completed: false },
          { id: "w1-t2-s3", title: "Data Manipulation & Cleaning", description: "Handle missing values, duplicates, and prepare data for analysis", resourceUrl: "https://www.kaggle.com/learn/data-cleaning", completed: false },
        ],
      },
      {
        id: "w1-t3",
        title: "Linear Algebra Basics",
        subTopics: [
          { id: "w1-t3-s1", title: "Vectors & Matrices", description: "Understand the mathematical building blocks used in ML algorithms", resourceUrl: "https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces", completed: false },
          { id: "w1-t3-s2", title: "Matrix Operations", description: "Learn matrix multiplication, transposition, and transformations", resourceUrl: "https://www.khanacademy.org/math/linear-algebra/matrix-transformations", completed: false },
          { id: "w1-t3-s3", title: "Eigenvalues & Eigenvectors", description: "Grasp key concepts for PCA and understanding data transformations", resourceUrl: "https://www.khanacademy.org/math/linear-algebra/alternate-bases/eigen-everything/v/linear-algebra-introduction-to-eigenvalues-and-eigenvectors", completed: false },
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
          { id: "w2-t1-s1", title: "Linear Regression", description: "Predict continuous values by fitting a line to your data", resourceUrl: "https://developers.google.com/machine-learning/crash-course/descending-into-ml/linear-regression", completed: false },
          { id: "w2-t1-s2", title: "Logistic Regression", description: "Classify data into categories using probability-based predictions", resourceUrl: "https://developers.google.com/machine-learning/crash-course/logistic-regression/video-lecture", completed: false },
          { id: "w2-t1-s3", title: "Decision Trees & Random Forests", description: "Build interpretable models that make decisions through branching logic", resourceUrl: "https://www.kaggle.com/learn/intro-to-machine-learning", completed: false },
          { id: "w2-t1-s4", title: "Support Vector Machines", description: "Find optimal boundaries to separate different classes in your data", resourceUrl: "https://www.youtube.com/watch?v=efR1C6CvhmE", completed: false },
        ],
      },
      {
        id: "w2-t2",
        title: "Model Evaluation",
        subTopics: [
          { id: "w2-t2-s1", title: "Train/Test Split & Cross-Validation", description: "Learn techniques to properly evaluate model performance", resourceUrl: "https://developers.google.com/machine-learning/crash-course/training-and-test-sets/video-lecture", completed: false },
          { id: "w2-t2-s2", title: "Metrics: Accuracy, Precision, Recall, F1", description: "Understand different ways to measure how well your model performs", resourceUrl: "https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall", completed: false },
          { id: "w2-t2-s3", title: "Confusion Matrix & ROC Curves", description: "Visualize model performance and trade-offs between metrics", resourceUrl: "https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc", completed: false },
        ],
      },
      {
        id: "w2-t3",
        title: "Unsupervised Learning",
        subTopics: [
          { id: "w2-t3-s1", title: "K-Means Clustering", description: "Group similar data points together without labeled examples", resourceUrl: "https://developers.google.com/machine-learning/clustering/algorithm/run-algorithm", completed: false },
          { id: "w2-t3-s2", title: "Principal Component Analysis (PCA)", description: "Reduce data complexity while preserving important patterns", resourceUrl: "https://www.youtube.com/watch?v=FgakZw6K1QQ", completed: false },
          { id: "w2-t3-s3", title: "Dimensionality Reduction", description: "Simplify high-dimensional data for better visualization and efficiency", resourceUrl: "https://www.kaggle.com/learn/feature-engineering", completed: false },
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
          { id: "w3-t1-s1", title: "Perceptrons & Activation Functions", description: "Understand the building blocks that make neural networks work", resourceUrl: "https://www.kaggle.com/learn/intro-to-deep-learning", completed: false },
          { id: "w3-t1-s2", title: "Forward & Backpropagation", description: "Learn how neural networks make predictions and learn from errors", resourceUrl: "https://www.youtube.com/watch?v=Ilg3gGewQ5U", completed: false },
          { id: "w3-t1-s3", title: "Loss Functions & Optimizers", description: "Master the tools that guide neural network training", resourceUrl: "https://developers.google.com/machine-learning/crash-course/reducing-loss/gradient-descent", completed: false },
        ],
      },
      {
        id: "w3-t2",
        title: "Deep Learning with PyTorch/TensorFlow",
        subTopics: [
          { id: "w3-t2-s1", title: "Building Neural Networks", description: "Create your first deep learning models using modern frameworks", resourceUrl: "https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html", completed: false },
          { id: "w3-t2-s2", title: "Training & Validation Loops", description: "Implement proper training workflows for reliable models", resourceUrl: "https://pytorch.org/tutorials/beginner/basics/optimization_tutorial.html", completed: false },
          { id: "w3-t2-s3", title: "Regularization & Dropout", description: "Prevent overfitting and build models that generalize well", resourceUrl: "https://developers.google.com/machine-learning/crash-course/regularization-for-simplicity/l2-regularization", completed: false },
          { id: "w3-t2-s4", title: "Transfer Learning", description: "Leverage pre-trained models to solve new problems efficiently", resourceUrl: "https://www.kaggle.com/learn/transfer-learning", completed: false },
        ],
      },
      {
        id: "w3-t3",
        title: "Convolutional Neural Networks",
        subTopics: [
          { id: "w3-t3-s1", title: "CNN Architecture", description: "Understand how CNNs process and recognize visual patterns", resourceUrl: "https://www.kaggle.com/learn/computer-vision", completed: false },
          { id: "w3-t3-s2", title: "Image Classification", description: "Build models that can identify objects in images", resourceUrl: "https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html", completed: false },
          { id: "w3-t3-s3", title: "Popular Architectures: ResNet, VGG", description: "Learn about breakthrough architectures that shaped modern AI", resourceUrl: "https://www.youtube.com/watch?v=VxhSouuSZDY", completed: false },
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
          { id: "w4-t1-s1", title: "Text Preprocessing & Tokenization", description: "Prepare text data for machine learning models", resourceUrl: "https://huggingface.co/learn/nlp-course/chapter2/1", completed: false },
          { id: "w4-t1-s2", title: "Word Embeddings (Word2Vec, GloVe)", description: "Represent words as meaningful numerical vectors", resourceUrl: "https://www.youtube.com/watch?v=viZrOnJclY0", completed: false },
          { id: "w4-t1-s3", title: "Transformers & Attention Mechanism", description: "Understand the architecture behind ChatGPT and modern AI", resourceUrl: "https://huggingface.co/learn/nlp-course/chapter1/4", completed: false },
          { id: "w4-t1-s4", title: "BERT & GPT Models", description: "Work with state-of-the-art language models for NLP tasks", resourceUrl: "https://huggingface.co/learn/nlp-course/chapter3/1", completed: false },
        ],
      },
      {
        id: "w4-t2",
        title: "Generative AI",
        subTopics: [
          { id: "w4-t2-s1", title: "Generative Adversarial Networks (GANs)", description: "Create AI that generates realistic images and content", resourceUrl: "https://www.youtube.com/watch?v=8L11aMN5KY8", completed: false },
          { id: "w4-t2-s2", title: "Variational Autoencoders (VAEs)", description: "Learn generative models that encode and decode data", resourceUrl: "https://www.youtube.com/watch?v=9zKuYvjFFS8", completed: false },
          { id: "w4-t2-s3", title: "Diffusion Models", description: "Understand the technology behind Stable Diffusion and DALL-E", resourceUrl: "https://huggingface.co/learn/diffusion-course/unit1/1", completed: false },
        ],
      },
      {
        id: "w4-t3",
        title: "Capstone Project",
        subTopics: [
          { id: "w4-t3-s1", title: "Project Planning & Dataset Selection", description: "Choose the right problem and data for your portfolio project", resourceUrl: "https://www.kaggle.com/datasets", completed: false },
          { id: "w4-t3-s2", title: "Model Development & Training", description: "Build and train a complete ML solution from scratch", resourceUrl: "https://www.kaggle.com/code", completed: false },
          { id: "w4-t3-s3", title: "Model Explainability (SHAP)", description: "Make your model's decisions interpretable and trustworthy", resourceUrl: "https://www.youtube.com/watch?v=VB9uV-x0gtg", completed: false },
          { id: "w4-t3-s4", title: "GitHub Portfolio Upload", description: "Showcase your work professionally for potential employers", resourceUrl: "https://docs.github.com/en/get-started/quickstart/create-a-repo", completed: false },
        ],
      },
    ],
  },
];
