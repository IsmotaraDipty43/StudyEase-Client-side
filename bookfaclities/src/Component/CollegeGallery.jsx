import React from 'react';


const images = [
  'https://t4.ftcdn.net/jpg/03/38/75/21/360_F_338752127_KeLWD80r6a6tNugFmVrvcma5zN5jdQBn.jpg',
  'https://img.freepik.com/premium-photo/group-students-attending-graduation-ceremony-nice-day_115086-774.jpg',
  'https://t3.ftcdn.net/jpg/04/92/47/92/360_F_492479287_LnwG377C8CoYpQ6vxnSj09Ulzs7VBXPN.jpg',
  'https://www.ku.ac.ae/wp-content/uploads/2023/05/KU-graduation-2022-1-min.jpeg',
  'https://assets.campbell.edu/wp-content/uploads/sites/3/2024/12/D9S_6133-1024x768.jpg',
  'https://c.stocksy.com/a/KYr000/z9/205860.jpg',
  'https://www-s3-live.kent.edu/s3fs-root/s3fs-public/group-photo-before-commencement-ceremony_0.jpg?VersionId=mqFvxRLswYASb0YdJv75UHsE8S1L1Szq',
  'https://wallpapers.com/images/hd/college-graduation-pictures-zo75ngpnmep1yw0h.jpg',
];

const CollegeGallery = () => {
  return (
    <section className="mt-10 mb-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-6">College Graduates Gallery</h2>
        <p className="text-lg text-gray-900 mb-6">
          Check out some of the memorable moments with our college graduates.
        </p>
        
        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image}
                alt={`College Group ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105"
              />
           
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeGallery;
