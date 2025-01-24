import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Read all products
export async function GET() {
  const products = await prisma.product.findMany();
  return new Response(JSON.stringify(products), {
    headers: { 'Content-Type': 'application/json' },
  });
}

// Create a new product
// Create a new product
export async function POST(request) {
  const newProduct = await request.json();
  const createdProduct = await prisma.product.create({
    data: {
      name: newProduct.name,
      category: newProduct.category,
      price: newProduct.price,
    },
  });
  return new Response(JSON.stringify(createdProduct), { status: 201 });
}



// Update an existing product
// Update an existing product
export async function PUT(request) {
  const updatedProduct = await request.json();
  const product = await prisma.product.update({
    where: { id: updatedProduct.id },
    data: {
      name: updatedProduct.name,
      category: updatedProduct.category,
      price: updatedProduct.price,
    },
  });

  if (!product) {
    return new Response(JSON.stringify({ message: 'Product not found' }), { status: 404 });
  }

  return new Response(JSON.stringify(product), { status: 200 });
}


// Delete a product
// Delete a product
export async function DELETE(request) {
  const { id } = await request.json();

  try {
    await prisma.product.delete({
      where: { id },
    });
    return new Response(JSON.stringify({ message: 'Product deleted' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Product not found' }), { status: 404 });
  }
}

