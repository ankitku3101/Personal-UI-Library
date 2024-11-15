import Image from 'next/image';

interface ProfileCardProps {
  profileImg: string;
  name: string;
  designation: string;
  emailId: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profileImg, name, designation, emailId }) => {
  return (
    <div className="relative overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform bg-gradient-to-r from-cyan-300 to-[#028cfd] hover:bg-opacity-40 shadow-xl">
      <div className="flex items-center gap-4">
        <div className="relative w-36 h-36 group-hover:w-40 group-hover:h-40 transition-all duration-500">
          <Image
            src={profileImg}
            alt={`${name}'s avatar`}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            priority
          />
        </div>
        <div className="w-fit transition-all transform duration-500">
          <h1 className="text-white font-bold">{name}</h1>
          <p className="text-gray-100">{designation}</p>
          <a
            href={`mailto:${emailId}`}
            className="text-xs text-gray-100 group-hover:opacity-100 opacity-0 transform transition-all"
          >
            {emailId}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
