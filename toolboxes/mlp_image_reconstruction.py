import torch
from torchvision import transforms
from PIL import Image
import matplotlib.pyplot as plt

class MLPScalar(torch.nn.Module):
    # Define your MLPScalar architecture here

    def __init__(self):
        super(MLPScalar, self).__init__()
        # Example architecture
        self.fc1 = torch.nn.Linear(2, 128)
        self.fc2 = torch.nn.Linear(128, 3)  # Outputs RGB

    def forward(self, x):
        x = torch.nn.functional.relu(self.fc1(x))
        x = torch.sigmoid(self.fc2(x))  # Normalize output to [0, 1]
        return x

class MLPPositional(torch.nn.Module):
    # Define your MLPPositional architecture here

    def __init__(self, num_frequencies=10, include_input=True):
        super(MLPPositional, self).__init__()
        # Example architecture
        self.include_input = include_input
        self.fc1 = torch.nn.Linear(2, 128)
        self.fc2 = torch.nn.Linear(128, 3)  # Outputs RGB

    def forward(self, x):
        if self.include_input:
            # Process coordinates, add positional encoding here if needed
            x = torch.cat([x, self.positional_encoding(x)], dim=-1)
        x = torch.nn.functional.relu(self.fc1(x))
        x = torch.sigmoid(self.fc2(x))  # Normalize output to [0, 1]
        return x

    def positional_encoding(self, x):
        # Example positional encoding
        return torch.cat([torch.sin(x * (2 ** i)) for i in range(10)], dim=-1)

if __name__ == '__main__':
    # Load a real image
    image_path = input()[1:-1]  # Replace with your image file path
    image = Image.open(image_path).convert('RGB')
    
    # Normalize and resize the image
    transform = transforms.Compose([
        transforms.Resize((256, 256)),  # Resize image to desired dimensions
        transforms.ToTensor(),           # Convert to Tensor and normalize to [0,1]
    ])
    
    image_tensor = transform(image)
    
    # Create dummy normalized coordinates (assume image coordinates normalized to [0,1])
    coords = torch.rand(10, 2)  # 10 random coordinate pairs
    print("Input coordinates:")
    print(coords)

    # Test MLP with scalar input
    model_scalar = MLPScalar()
    out_scalar = model_scalar(coords)
    print("\nMLPScalar output (RGB):")
    print(out_scalar)

    # Test MLP with positional encoding
    model_positional = MLPPositional(num_frequencies=10, include_input=True)
    out_positional = model_positional(coords)
    print("\nMLPPositional output (RGB):")
    print(out_positional)

    # Optionally, use the output to create a new image
    output_image = (out_positional.view(10, 1, 3) * 255).byte().numpy()  # Reshape and scale
    output_image = output_image.transpose(0, 2, 1)  # Prepare for visualization

    # Visualize the output
    plt.figure(figsize=(10, 2))
    for i in range(output_image.shape[0]):
        plt.subplot(2, 5, i + 1)
        plt.imshow(output_image[i].reshape(1, 3), aspect='auto')
        plt.axis('off')
    plt.show()