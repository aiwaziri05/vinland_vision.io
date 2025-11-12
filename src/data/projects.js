// src/data/projects.js

export const projects = [
	{
		id: 'oakridge-commercial-center',
		title: 'Oakridge Commercial Center',
		category: 'Commercial',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuBfyzeJJDP8vEIAZr-B3jWarLahf3hd0PDVXOIwkm8DDD0wA3msj0GMVeZdxdOfZ2O1u3Jc0LzFHtneOrfvywTaUnpVLVUnvSC6ZOqE9NpW8zXjw98RgnrhQ1UTpaBU1BPQboAmb8Q_rmwK9lnLee96O7Fq4m3zC3oFvFHrRLHukZlDRzSGVyCzHXEJyNEDABM7JtLWfUIVtVTGHeanwSRu1dxogBz8jD_h79Tcy4MjHiUHpfN_JnS5NvgWcbHWGoZxtR36PYm72R4',
		description: 'A state-of-the-art business hub with innovative design.',
		content: `
      <p>The Oakridge Commercial Center is designed to foster innovation and collaboration. 
      It features an open office concept, high-efficiency energy systems, and stunning glass 
      facades that blend urban elegance with sustainability.</p>
      <ul>
        <li>Smart building automation</li>
        <li>Eco-friendly materials</li>
        <li>Over 10,000 sqm of flexible workspace</li>
      </ul>
    `,
		location: {
			lat: 9.0724,
			lng: 7.4914,
			address: 'Central Business District, Abuja, Nigeria',
		},
	},
	{
		id: 'coastal-family-home',
		title: 'Coastal Family Home',
		category: 'Residential',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuCqWMeFZWiKUUYr_77z2Doze485L8stjBeoaPonBEyCKrLqs6-qmAcAAIbADLi9FayN-catlTK1P1Nt5m4_snQMsahu478TRjqCQECj54O-51FOjhK6wPfjOu4bRG4xnh7Ql8BFK-UXEorfaoiW4t0bfq3UGhMf8lRchV4xqPVj2ooj8l5RvFFnv3-6TJCqMpZA8qZewoWNZpxloEA_Zs6hdNpSIdTON8Pu-apgTHLLwskxL0XJVUTthSbCaVVcupW5QfDrBSp-_Jw',
		description: 'Luxurious and spacious residence with ocean views.',
		content: `
      <p>This home combines coastal charm with modern living. 
      Large windows invite natural light and frame breathtaking sea views.</p>
      <p>Featuring open-plan spaces, warm textures, and a minimalist color palette, 
      the design brings serenity to family living.</p>
    `,
		location: {
			lat: 6.4311,
			lng: 3.4219,
			address: 'Lekki Phase 1, Lagos, Nigeria',
		},
	},
	{
		id: 'obum-plaza-renovation',
		title: 'Obum Plaza Renovation',
		category: 'Commercial',
		image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80',
		description: 'A complete transformation of a traditional business plaza into a modern workspace.',
		content: `
      <p>Obum Plaza was redesigned to optimize functionality, natural lighting, and sustainability. 
      The design introduced open-plan offices, glass facades, and solar-powered systems.</p>
      <p>We modernized its structure with a blend of steel, concrete, and reflective materials to 
      create a new standard for commercial real estate efficiency.</p>
    `,
		location: {
			lat: 6.4281,
			lng: 3.4212,
			address: 'Obum Plaza Suite 110, 16 Ademola Adetokunbo, Victoria Island, Lagos',
		},
	},
	{
		id: 'greenwood-apartments',
		title: 'Greenwood Apartments',
		category: 'Residential',
		image: 'https://images.unsplash.com/photo-1592595896551-12bdf4d8d3c7?auto=format&fit=crop&w=1200&q=80',
		description: 'Modern apartments designed for comfortable and sustainable urban living.',
		content: `
      <p>Greenwood Apartments feature smart home systems, rooftop gardens, and flexible layouts 
      to promote sustainable living. The building integrates renewable energy sources 
      and water recycling systems.</p>
      <p>Every apartment is a balance of simplicity, function, and beauty.</p>
    `,
		location: {
			lat: 6.5244,
			lng: 3.3792,
			address: 'Ikoyi, Lagos, Nigeria',
		},
	},
	{
		id: 'serene-villa',
		title: 'Serene Villa',
		category: 'Residential',
		image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
		description: 'A private villa that blends luxury, peace, and modern architecture.',
		content: `
      <p>Serene Villa offers a perfect escape with modern design, an infinity pool, 
      and panoramic views of lush gardens. The project emphasizes natural light, 
      high ceilings, and a minimalist design palette.</p>
    `,
		location: {
			lat: 6.4654,
			lng: 3.4064,
			address: 'Banana Island, Lagos, Nigeria',
		},
	},
	{
		id: 'nexus-office-tower',
		title: 'Nexus Office Tower',
		category: 'Commercial',
		image: 'https://images.unsplash.com/photo-1600585154208-0f3b3d6a97a4?auto=format&fit=crop&w=1200&q=80',
		description: 'A high-rise office tower built for productivity, sustainability, and innovation.',
		content: `
      <p>The Nexus Tower serves as a hub for technology-driven companies, offering flexible 
      office layouts, rooftop lounges, and integrated smart systems.</p>
      <p>Its design promotes energy efficiency and modern aesthetics with green façades and vertical gardens.</p>
    `,
		location: {
			lat: 9.0724,
			lng: 7.4914,
			address: 'Wuse II, Abuja, Nigeria',
		},
	},
	{
		id: 'sunset-retreat-lodge',
		title: 'Sunset Retreat Lodge',
		category: 'Hospitality',
		image: 'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80',
		description: 'A tranquil lodge nestled in nature for luxury and eco-conscious guests.',
		content: `
      <p>The Sunset Retreat blends natural timber, open-air architecture, and solar systems 
      for a sustainable hospitality experience. Guests enjoy serene mountain views 
      and eco-friendly luxury.</p>
    `,
		location: {
			lat: 6.3169,
			lng: 8.1137,
			address: 'Obudu Mountain Resort, Cross River, Nigeria',
		},
	},
	{
		id: 'innovation-hub-center',
		title: 'Innovation Hub Center',
		category: 'Institutional',
		image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
		description: 'A collaborative hub designed for startups and innovators to thrive.',
		content: `
      <p>The Innovation Hub Center provides coworking spaces, event halls, and research facilities. 
      Its design encourages collaboration and creativity with green spaces and smart energy solutions.</p>
    `,
		location: {
			lat: 9.0765,
			lng: 7.3986,
			address: 'Jabi, Abuja, Nigeria',
		},
	},
	{
		id: 'city-mall-extension',
		title: 'City Mall Extension',
		category: 'Commercial',
		image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f8f?auto=format&fit=crop&w=1200&q=80',
		description: 'An architectural expansion integrating retail, leisure, and entertainment zones.',
		content: `
      <p>The City Mall Extension features modern architecture with efficient ventilation, 
      energy-saving lighting, and a contemporary outdoor leisure terrace.</p>
    `,
		location: {
			lat: 9.0579,
			lng: 7.4951,
			address: 'Central Business District, Abuja, Nigeria',
		},
	},
];

export default projects;
