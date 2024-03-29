import React from 'react';
import axios from 'axios';
import {FaUser} from 'react-icons/fa';
import {BsPersonCheckFill} from 'react-icons/bs';
import {ImUserPlus} from 'react-icons/im';
import {useAuthContext} from '../contexts/AuthContext';
import {useNotification} from '../contexts/NotificationContext';
import {v4} from 'uuid';

const ColleaguesView = () => {
  // storing all the colleague's information
  const [profiles, setProfiles] = React.useState([]);
  // the logged in user
  const {user, getProfile} = useAuthContext();
  const {show} = useNotification();

  /**
   * Get all the available profiles from the database
   */
  async function getAllProfiles() {
    try {
      const resp = await axios.get(
        'https://prometheus-api-msql.herokuapp.com/api/v1/profiles/all',
      );

      if (resp.data.data) {
        const data = resp.data.data.filter(
          (item) => item.id !== user.profile.id,
        );

        setProfiles(data);
      }
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Send a create connection request
   * @param {number | string} connectedWith
   */
  async function sendConnectionReq(connectedWith) {
    try {
      const resp = await axios.post(
        `https://prometheus-api-msql.herokuapp.com/api/v1/profiles/${user.username}/connections`,
        {connectedWith},
      );

      if (resp.data.success) {
        await getProfile();
        show('Connection added!');
      }
    } catch (err) {
      console.error(err);
    }
  }

  // Getting all the profiles on component load
  React.useEffect(() => {
    getAllProfiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-sm flex min-w-[240px] flex-col absolute top-[100px] right-[5vw] gap-8 shadow-md p-4 rounded-md bg-white z-10">
      {profiles.map((profile) => (
        <div key={v4()} className="flex flex-row items-center gap-4">
          <div className="h-[30px] w-[30px] rounded-full border-[1px] border-secondary flex justify-center items-center">
            <FaUser className="text-lg fill-secondary" />
          </div>
          <div className="flex-grow mr-4">
            <h6 className="text-md text-textPrimary font-display">
              {profile.fullname}
            </h6>
            <p className="text-sm">{profile.specialization}</p>
          </div>
          <button onClick={() => sendConnectionReq(profile.id)}>
            {user.profile.connections.find(
              // if the user is already connected with the profile then show a
              // check mark otherwise show a send req (+) mark
              (conn) => conn.connectedWith === profile.id,
            ) ? (
              <BsPersonCheckFill className="fill-primary" />
            ) : (
              <ImUserPlus className="fill-primary" />
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ColleaguesView;
