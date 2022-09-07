import brain from "brain.js";


export default function Brain({ input, output, words }) {
  
  const config = {
    binaryThresh: 0.5,
    hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
  };
  const net = new brain.NeuralNetwork(config)
  let trainingData = [];
  for (let i = 0; i < input.length; i++) {
    trainingData.push({ input: input[i], output: output[i] });
  }

  net.train(
    {
      trainingData,
    },
    {
      iterations: 500,
      errorThresh: 0.21,
    }
  );

  const Score = net.run(words);

  return <>
  {trainingData&& console.log(trainingData)}
  {Score && Score}</>;
}
