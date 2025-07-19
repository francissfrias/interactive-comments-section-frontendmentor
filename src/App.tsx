import data from './assets/data.json';
import type { CommentsInterface } from './lib/types';

const getImageUrl = (imagePath: string) => {
  const cleanPath = imagePath.replace('./', '/src/');
  return cleanPath;
};

function App() {
  const dataWithTs: CommentsInterface = data;

  return (
    <main className=' w-full py-6 px-6 flex flex-col gap-4'>
      {dataWithTs.comments.map((items) => {
        return (
          <div key={items.id}>
            <div className='bg-neutral-white p-4 rounded-lg space-y-4'>
              <div className='flex items-center gap-4 h-[1.5lh]  '>
                <img
                  className='h-full'
                  src={getImageUrl(items.user.image.png)}
                  alt={items.user.username}
                />
                <span className='font-bold '>{items.user.username}</span>
                <span className='font-medium text-neutral-grey-medium'>
                  {items.createdAt}
                </span>
              </div>

              <p className='text-neutral-grey-medium font-medium '>
                {items.content}
              </p>
              <div className='flex items-center justify-between'>
                <div className='flex items-center justify-center bg-neutral-grey-xtralight rounded-lg py-2  '>
                  <button className='px-4'>
                    <img
                      src={getImageUrl('./assets/icon-plus.svg')}
                      alt='plus icon'
                    />
                  </button>
                  <span className='font-bold text-primary-purple'>
                    {items.score}
                  </span>
                  <button className='px-4'>
                    <img
                      src={getImageUrl('./assets/icon-minus.svg')}
                      alt='minus icon'
                    />
                  </button>
                </div>
                <button className='flex items-center gap-2 h-lh hover:bg-primary-purple-light active:bg-primary-purple transition-all duration-200 ease-in-out rounded-lg p-4 group'>
                  <svg
                    width='14'
                    height='13'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      className='fill-primary-purple group-hover:fill-white group-active:fill-white transition-all duration-200 ease-in-out'
                      d='M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z'
                    />
                  </svg>
                  <span className='text-primary-purple font-bold group-hover:text-white group-active:text-white transition-all duration-200 ease-in-out'>
                    Reply
                  </span>
                </button>
              </div>
            </div>
            {items.replies && items.replies.length > 0 && (
              <div className='flex flex-col gap-4 border-l-2 border-neutral-grey-light mt-4  pl-4 py-0  '>
                {items.replies.map((replyItems) => {
                  return (
                    <div
                      key={replyItems.id}
                      className=' bg-neutral-white rounded-lg p-4 space-y-4'
                    >
                      <div className='flex items-center  gap-4 h-[1.5lh] '>
                        <img
                          className='h-full'
                          src={getImageUrl(replyItems.user.image.png)}
                          alt={replyItems.user.username}
                        />
                        <span className='font-bold '>
                          {replyItems.user.username}
                        </span>
                        {replyItems.user.username ===
                          dataWithTs.currentUser.username && (
                          <span className='bg-primary-purple text-white  px-2 -ml-2 text-center rounded-sm font-bold'>
                            you
                          </span>
                        )}
                        <span className='font-medium text-neutral-grey-medium '>
                          {replyItems.createdAt}
                        </span>
                      </div>
                      <p className='text-neutral-grey-medium font-medium '>
                        <span className='text-primary-purple font-bold'>
                          {replyItems.user.username &&
                            `@${replyItems.user.username}`}
                        </span>{' '}
                        {replyItems.content}
                      </p>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center justify-center bg-neutral-grey-xtralight rounded-lg py-2 '>
                          <button className='px-4'>
                            <img
                              src={getImageUrl('./assets/icon-plus.svg')}
                              alt='plus icon'
                            />
                          </button>
                          <span className='font-bold text-primary-purple'>
                            {replyItems.score}
                          </span>
                          <button className='px-4'>
                            <img
                              src={getImageUrl('./assets/icon-minus.svg')}
                              alt='minus icon'
                            />
                          </button>
                        </div>
                        {replyItems.user.username ===
                        dataWithTs.currentUser.username ? (
                          <div className='flex items-center '>
                            <button className='flex items-center gap-2 h-lh hover:bg-primary-purple-light active:bg-primary-purple transition-all duration-200 ease-in-out rounded-lg px-2 py-4  group'>
                              <svg
                                width='14'
                                height='13'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  className='fill-primary-purple group-hover:fill-white group-active:fill-white transition-all duration-200 ease-in-out'
                                  d='M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z'
                                />
                              </svg>
                              <span className='text-primary-purple font-bold group-hover:text-white group-active:text-white transition-all duration-200 ease-in-out'>
                                Reply
                              </span>
                            </button>
                            <button className='flex items-center gap-2 h-lh hover:bg-primary-purple-light active:bg-primary-purple transition-all duration-200 ease-in-out rounded-lg px-2 py-4  group'>
                              <svg
                                width='14'
                                height='13'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  className='fill-primary-purple group-hover:fill-white group-active:fill-white transition-all duration-200 ease-in-out'
                                  d='M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z'
                                />
                              </svg>
                              <span className='text-primary-purple font-bold group-hover:text-white group-active:text-white transition-all duration-200 ease-in-out'>
                                Reply
                              </span>
                            </button>
                          </div>
                        ) : (
                          <button className='flex items-center gap-2 h-lh hover:bg-primary-purple-light active:bg-primary-purple transition-all duration-200 ease-in-out rounded-lg p-4 group'>
                            <svg
                              width='14'
                              height='13'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                className='fill-primary-purple group-hover:fill-white group-active:fill-white transition-all duration-200 ease-in-out'
                                d='M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z'
                              />
                            </svg>
                            <span className='text-primary-purple font-bold group-hover:text-white group-active:text-white transition-all duration-200 ease-in-out'>
                              Reply
                            </span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
      <div className='bg-neutral-white p-4 rounded-lg'>
        <div className='flex items-center gap-4 h-[1.5lh] '>
          <img
            className='h-full'
            src={getImageUrl(dataWithTs.currentUser.image.png)}
            alt={dataWithTs.currentUser.username}
          />
          <button className='bg-primary-purple text-white px-4 py-2 rounded-lg font-bold tracking-wide capitalize'>
            SEND
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
