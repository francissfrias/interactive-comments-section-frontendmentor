import data from './assets/data.json';
import type { CommentsInterface } from './lib/types';

const getImageUrl = (imagePath: string) => {
  const cleanPath = imagePath.replace('./', '/src/');
  return cleanPath;
};

function App() {
  const dataWithTs: CommentsInterface = data;

  return (
    <main className=' w-full py-10 px-6 flex flex-col gap-4'>
      {dataWithTs.comments.map((items) => {
        return (
          <div key={items.id}>
            <div className='bg-neutral-white p-4 rounded-lg'>
              <div className='flex items-center gap-4 h-[1.5lh] '>
                <img
                  className='h-full'
                  src={getImageUrl(items.user.image.png)}
                  alt={items.user.username}
                />
                <span className='font-bold '>{items.user.username}</span>
                <span className='font-bold text-neutral-grey-light'>
                  {items.createdAt}
                </span>
              </div>

              <p>{items.content}</p>
            </div>
            {items.replies && items.replies.length > 0 && (
              <div className='flex flex-col gap-4 border-l-2 border-neutral-grey-light mt-6  pl-4 py-0 '>
                {items.replies.map((replyItems) => {
                  return (
                    <div
                      key={replyItems.id}
                      className=' bg-neutral-white rounded-lg p-4 '
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
                        <span className='font-bold text-neutral-grey-light'>
                          {replyItems.createdAt}
                        </span>
                      </div>
                      <p>{replyItems.content}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </main>
  );
}

export default App;
