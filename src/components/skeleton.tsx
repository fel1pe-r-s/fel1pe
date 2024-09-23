import { Skeleton } from "@/components/ui/skeleton";
import { Tag } from "./tag";

export function SkeletonLoader() {
  return (
    <article>
      <div className="flex flex-col gap-2 justify-center items-center">
        <Tag>Trabalhos</Tag>
        <p className="text-base text-center">
          Alguns dos projetos que construí:
        </p>
      </div>
      <div className="grid md:grid-cols-2 items-center justify-center bg-gray-900  min-h-[550px]">
        <div className=" p-12 bg-gray-800 md:h-full min-h-80 flex items-center justify-center">
          <Skeleton className="w-full max-w-3xl mx-auto space-y-4 px-4 sm:px-0">
            <div className="md:w-[600px] md:h-[300px] w-32 h-16"></div>
            <div className="flex justify-center space-x-2 overflow-x-auto sm:overflow-x-visible">
              <button className="w-16 h-16 flex-shrink-0 border-2 rounded overflow-hidden transition-all">
                <div className="w-64 h-64 object-cover" />
              </button>
            </div>
          </Skeleton>
        </div>
        <div className="flex flex-col gap-6 p-12 min-h-80 ">
          <div className="max-w-3xl mx-auto px-4 sm:px-0">
            <div className="flex flex-col gap-6 p-12 min-h-80 rounded-sm min-w-80 md:min-w-3xl">
              <Skeleton className="shadow rounded-md w-full mx-auto bg-transparent">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-3">
                      <div className="h-5 bg-slate-700 rounded  md:w-[500px]"></div>
                      <div className="h-36 bg-slate-700 rounded  md:w-[500px]"></div>

                      <div className="h-11 bg-slate-700 rounded md:w-[500px]"></div>
                    </div>
                  </div>
                </div>
              </Skeleton>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
