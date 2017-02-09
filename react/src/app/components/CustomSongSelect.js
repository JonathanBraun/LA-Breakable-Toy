import React from 'react';

const CustomSongSelect = props => {

  return(
    <div>
    <ul className="accordion" data-accordion>
      <li className="accordion-navigation">
        <a href="#panel1a">Accordion 1</a>
        <div id="panel1a" className="content active">
        <table>
          <thead>
          <tr>
             <th>Time Slot</th>
             <th>Playlist</th>
          </tr>
          </thead>
          <tfoot>
          <tr>
              <td>12am-2am</td>
              <td>
              <form action="" method="">
                <select id="dropdown" onChange={props.getCustomPlaylist}>
                  <option value="Get Up & Go">Get Up & Go</option>
                  <option value="Inspiration">Inspiration</option>
                  <option value="Relaxation">Relaxation</option>
                  <option selected value="Taking Care of Business">Taking Care of Business</option>
                  <option value="Americana">Americana</option>
                  <option value="Love Songs">Love Songs</option>
                  <option value="Heartache">Heartache</option>
                  <option value="Evening Wind Down">Evening Wind Down</option>
                </select>
              </form>
              </td>
          </tr>
          <tr>
             <td>2am-4am</td>
             <td>
             <form action="" method="">
               <select id="dropdown" onChange={props.getCustomPlaylist}>
                 <option value="Get Up & Go">Get Up & Go</option>
                 <option value="Inspiration">Inspiration</option>
                 <option value="Relaxation">Relaxation</option>
                 <option selected value="Taking Care of Business">Taking Care of Business</option>
                 <option value="Americana">Americana</option>
                 <option value="Love Songs">Love Songs</option>
                 <option value="Heartache">Heartache</option>
                 <option value="Evening Wind Down">Evening Wind Down</option>
               </select>
             </form>
             </td>
          </tr>
          <tr>
              <td>4am-6am</td>
              <td>
              <form action="" method="">
                <select id="dropdown" onChange={props.getCustomPlaylist}>
                  <option value="Get Up & Go">Get Up & Go</option>
                  <option value="Inspiration">Inspiration</option>
                  <option value="Relaxation">Relaxation</option>
                  <option selected value="Taking Care of Business">Taking Care of Business</option>
                  <option value="Americana">Americana</option>
                  <option value="Love Songs">Love Songs</option>
                  <option value="Heartache">Heartache</option>
                  <option value="Evening Wind Down">Evening Wind Down</option>
                </select>
              </form>
              </td>
          </tr>
          <tr>
              <td>6am-8am</td>
              <td>
              <form action="" method="">
                <select id="dropdown" onChange={props.getCustomPlaylist}>
                  <option value="Get Up & Go">Get Up & Go</option>
                  <option value="Inspiration">Inspiration</option>
                  <option value="Relaxation">Relaxation</option>
                  <option selected value="Taking Care of Business">Taking Care of Business</option>
                  <option value="Americana">Americana</option>
                  <option value="Love Songs">Love Songs</option>
                  <option value="Heartache">Heartache</option>
                  <option value="Evening Wind Down">Evening Wind Down</option>
                </select>
              </form>
              </td>
          </tr>
          <tr>
              <td>8am-10am</td>
              <td>
              <form action="" method="">
                <select id="dropdown" onChange={props.getCustomPlaylist}>
                  <option value="Get Up & Go">Get Up & Go</option>
                  <option value="Inspiration">Inspiration</option>
                  <option value="Relaxation">Relaxation</option>
                  <option selected value="Taking Care of Business">Taking Care of Business</option>
                  <option value="Americana">Americana</option>
                  <option value="Love Songs">Love Songs</option>
                  <option value="Heartache">Heartache</option>
                  <option value="Evening Wind Down">Evening Wind Down</option>
                </select>
              </form>
              </td>
          </tr>
          <tr>
              <td>10am-12pm</td>
              <td>
              <form action="" method="">
                <select id="dropdown" onChange={props.getCustomPlaylist}>
                  <option value="Get Up & Go">Get Up & Go</option>
                  <option value="Inspiration">Inspiration</option>
                  <option value="Relaxation">Relaxation</option>
                  <option selected value="Taking Care of Business">Taking Care of Business</option>
                  <option value="Americana">Americana</option>
                  <option value="Love Songs">Love Songs</option>
                  <option value="Heartache">Heartache</option>
                  <option value="Evening Wind Down">Evening Wind Down</option>
                </select>
              </form>
              </td>
          </tr>
          <tr>
              <td>12pm-2pm</td>
              <td>
              <form action="" method="">
                <select id="dropdown" onChange={props.getCustomPlaylist}>
                  <option value="Get Up & Go">Get Up & Go</option>
                  <option value="Inspiration">Inspiration</option>
                  <option value="Relaxation">Relaxation</option>
                  <option selected value="Taking Care of Business">Taking Care of Business</option>
                  <option value="Americana">Americana</option>
                  <option value="Love Songs">Love Songs</option>
                  <option value="Heartache">Heartache</option>
                  <option value="Evening Wind Down">Evening Wind Down</option>
                </select>
              </form>
              </td>
          </tr>
          <tr>
              <td>2pm-4pm</td>
              <td>
              <form action="" method="">
                <select id="dropdown" onChange={props.getCustomPlaylist}>
                  <option value="Get Up & Go">Get Up & Go</option>
                  <option value="Inspiration">Inspiration</option>
                  <option value="Relaxation">Relaxation</option>
                  <option selected value="Taking Care of Business">Taking Care of Business</option>
                  <option value="Americana">Americana</option>
                  <option value="Love Songs">Love Songs</option>
                  <option value="Heartache">Heartache</option>
                  <option value="Evening Wind Down">Evening Wind Down</option>
                </select>
              </form>
              </td>
          </tr>
          <tr>
              <td>4pm-6pm</td>
              <td>
              <form action="" method="">
                <select id="dropdown" onChange={props.getCustomPlaylist}>
                  <option value="Get Up & Go">Get Up & Go</option>
                  <option value="Inspiration">Inspiration</option>
                  <option value="Relaxation">Relaxation</option>
                  <option selected value="Taking Care of Business">Taking Care of Business</option>
                  <option value="Americana">Americana</option>
                  <option value="Love Songs">Love Songs</option>
                  <option value="Heartache">Heartache</option>
                  <option value="Evening Wind Down">Evening Wind Down</option>
                </select>
              </form>
              </td>
          </tr>
          <tr>
              <td>6pm-8pm</td>
              <td>
                <form action="" method="">
                <select id="dropdown" onChange={props.getCustomPlaylist}>
                  <option value="Get Up & Go">Get Up & Go</option>
                  <option value="Inspiration">Inspiration</option>
                  <option value="Relaxation">Relaxation</option>
                  <option selected value="Taking Care of Business">Taking Care of Business</option>
                  <option value="Americana">Americana</option>
                  <option value="Love Songs">Love Songs</option>
                  <option value="Heartache">Heartache</option>
                  <option value="Evening Wind Down">Evening Wind Down</option>
                </select>
              </form>
              </td>
          </tr>
          <tr>
              <td>8pm-10pm</td>
              <td>
              <form action="" method="">
                <select id="dropdown" onChange={props.getCustomPlaylist}>
                  <option value="Get Up & Go">Get Up & Go</option>
                  <option value="Inspiration">Inspiration</option>
                  <option value="Relaxation">Relaxation</option>
                  <option selected value="Taking Care of Business">Taking Care of Business</option>
                  <option value="Americana">Americana</option>
                  <option value="Love Songs">Love Songs</option>
                  <option value="Heartache">Heartache</option>
                  <option value="Evening Wind Down">Evening Wind Down</option>
                </select>
              </form>
              </td>
          </tr>
          <tr>
              <td>10pm-12am</td>
              <td>
              <form action="" method="">
                <select id="dropdown" onChange={props.getCustomPlaylist}>
                  <option value="Get Up & Go">Get Up & Go</option>
                  <option value="Inspiration">Inspiration</option>
                  <option value="Relaxation">Relaxation</option>
                  <option selected value="Taking Care of Business">Taking Care of Business</option>
                  <option value="Americana">Americana</option>
                  <option value="Love Songs">Love Songs</option>
                  <option value="Heartache">Heartache</option>
                  <option value="Evening Wind Down">Evening Wind Down</option>
                </select>
              </form>
              </td>
          </tr>
          </tfoot>
        </table>
        </div>
      </li>
    </ul>
    </div>
  );
};

export default CustomSongSelect;
