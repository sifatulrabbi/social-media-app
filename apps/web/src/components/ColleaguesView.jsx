import React from 'react';
import axios from 'axios';
import {FaUser} from 'react-icons/fa';
import {ImUserPlus} from 'react-icons/im';
import {useAuthContext} from '../contexts/AuthContext';

const ColleaguesView = () => {
  const [profiles, setProfiles] = React.useState([]);
  const {user} = useAuthContext();

  async function getAllProfiles() {
    try {
      const resp = await axios.get('http://localhost:8080/api/v1/profiles/all');
      setProfiles(resp.data.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function sendConnectionReq() {
    try {
      const resp = await axios.post(
        `http://localhost:8080/api/v1/profiles/${user.username}/connections`,
      );
    } catch (err) {
      console.error(err);
    }
  }

  React.useEffect(() => {
    getAllProfiles();
  }, []);

  return (
    <div className="max-w-sm flex min-w-[240px] flex-col fixed top-[100px] right-[5vw] gap-8 shadow-md p-4 rounded-md">
      {profiles.map((profile) => (
        <div className="flex flex-row items-center gap-4">
          <div className="h-[30px] w-[30px] rounded-full border-[1px] border-secondary flex justify-center items-center">
            <FaUser className="text-lg fill-secondary" />
          </div>
          <div className="flex-grow mr-4">
            <h6 className="text-md text-textPrimary font-display">
              {profile.fullname}
            </h6>
            <p className="text-sm">{profile.specialization}</p>
          </div>
          <button>
            <ImUserPlus className="fill-primary" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ColleaguesView;
