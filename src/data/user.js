const INFO = {
	main: {
		title: "Santiago Saavedra",
		name: "Santiago Saavedra",
		email: "santiagosaav.99@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/Frust135",
		linkedin: "https://linkedin.com/in/santiagosaav/",
	},

	homepage: {
		title: "Python Developer and AI Enthusiast",
		description: "Hello! I'm Santiago, a Civil Engineer in Computer Science from Chile with three years of experience as a Python Developer. I specialize in API development, task automation, and AI integration. Additionally, I've contributed to university projects in AI, focusing on Neural Networks and Reinforcement Learning. My passion lies in AI technologies, leveraging my engineering and software development skills.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Safe Exploring",
			description: "SafeExploring is an application that utilizes reinforcement learning, specifically SARSA, to train a robotic agent in two scenarios: Cliffwalking and Cart Pole. The primary objective is to reduce the number of times the agent falls into dangerous states in the original scenario. This is achieved by incorporating the concept of 'contextual affordance,' which establishes a relationship between an action, a state, and a location to predict if the action will result in a negative outcome, thereby mitigating potential harm.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Frust135/SafeExploring",
		},

		{
			title: "ML Pneumonia Scratch",
			description:
				"This repository contains a simple implementation of a neural network built from scratch using Numpy. The neural network is trained to classify pneumonia images into two categories: normal and pneumonia. The dataset used is the Chest X-Ray Images (Pneumonia) dataset from Kaggle.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Frust135/ml-pneumonia-scratch",
		},
	],
};

export default INFO;
