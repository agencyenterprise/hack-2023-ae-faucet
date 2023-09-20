import { Dialog, Transition } from "@headlessui/react";
import {
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";

const Modal = ({
  showModal,
  setShowModal,
  confirm,
  form,
  setForm,
  saving,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleChange = (e) => {
    const newValue = { ...form, [e.target.id]: e.target.value };
    setForm(newValue);
  };

  const handleChangeLinks = (e, index) => {
    const newValue = { ...form };
    newValue.links[index] = e.target.value;
    setForm(newValue);
  };

  useEffect(() => {
    setCurrentStep(0);
  }, [showModal]);

  const handleNext = () => {
    if (currentStep === 0) {
      if (form.title.length > 1 && form.description.length > 1)
        setCurrentStep(1);
      else toast("Please fill in all required fields", { type: "error" });
    } else if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      confirm();
    }
  };

  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog as="div" className="relative z-[1005]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-[640px] text-left transition-all transform bg-white rounded-2xl shadow-xl">
                <div className="flex flex-col gap-4 bg-white rounded-2xl">
                  <div>
                    <div className="w-full sm:flex sm:items-start">
                      <div className="flex-1">
                        <Dialog.Title
                          as="div"
                          className="flex flex-row gap-2 p-4"
                        >
                          <PlusIcon className="w-10 text-orange-500" />
                          <h1 className="text-2xl leading-[63px] tracking-[-1.2px]  font-bold text-gray-900">
                            {form?.id ? "Edit project" : "New project"}
                          </h1>
                          <div className="flex-grow" />
                          <button onClick={() => setShowModal(false)}>
                            <XMarkIcon className="w-8 text-gray-400" />
                          </button>
                        </Dialog.Title>
                        <nav aria-label="Progress">
                          <ol role="list" className="rounded-[62px] md:flex">
                            {steps.map((step, stepIdx) => (
                              <li
                                key={step.name}
                                className="relative md:flex md:flex-1"
                                onClick={() => setCurrentStep(step.id)}
                              >
                                {step.id < currentStep ? (
                                  <a className="flex items-center w-full cursor-pointer group">
                                    <span className="flex items-center px-6 py-4 text-sm font-medium">
                                      <span className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full">
                                        <step.icon className="w-full text-green-500" />
                                      </span>
                                      <span className="ml-4 text-sm font-medium text-gray-900">
                                        {step.name}
                                      </span>
                                    </span>
                                  </a>
                                ) : step.id === currentStep ? (
                                  <a
                                    className="flex items-center px-6 py-4 text-sm font-medium cursor-pointer"
                                    aria-current="step"
                                  >
                                    <span className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full">
                                      <span className="text-orange-500">
                                        <step.icon className="w-full" />
                                      </span>
                                    </span>
                                    <span className="ml-4 text-sm font-medium text-orange-500">
                                      {step.name}
                                    </span>
                                  </a>
                                ) : (
                                  <a className="flex items-center cursor-pointer group">
                                    <span className="flex items-center px-6 py-4 text-sm font-medium">
                                      <span className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full">
                                        <span className="text-gray-500 group-hover:text-gray-900">
                                          <step.icon className="w-full" />
                                        </span>
                                      </span>
                                      <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                        {step.name}
                                      </span>
                                    </span>
                                  </a>
                                )}
                              </li>
                            ))}
                          </ol>
                        </nav>
                        <hr className="my-2 text-gray-200" />
                        <div className="flex flex-col gap-2 p-4">
                          {currentStep === 0 && (
                            <>
                              <div className="w-full">
                                <label
                                  className="block mb-2 text-sm font-bold text-gray-500"
                                  htmlFor="name"
                                >
                                  Title *
                                </label>
                                <input
                                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                  id="title"
                                  type="text"
                                  autoComplete="off"
                                  onChange={handleChange}
                                  placeholder="Awesome maker"
                                  required
                                  value={form.title}
                                  maxLength={50}
                                />
                              </div>
                              <div>
                                <label
                                  className="block mb-2 text-sm font-bold text-gray-500"
                                  htmlFor="msg"
                                >
                                  Description *
                                </label>
                                <textarea
                                  className="w-full px-3 py-2 text-sm leading-tight text-gray-500 border rounded shadow appearance-none resize-none focus:outline-none focus:shadow-outline"
                                  id="description"
                                  autoComplete="off"
                                  onChange={handleChange}
                                  required
                                  rows={4}
                                  maxLength={200}
                                  placeholder="Does something awesome..."
                                  value={form.description}
                                ></textarea>
                              </div>
                              <div className="w-full">
                                <label
                                  className="block mb-2 text-sm font-bold text-gray-500"
                                  htmlFor="name"
                                >
                                  Cover image link
                                </label>
                                <input
                                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                  id="image"
                                  type="url"
                                  autoComplete="off"
                                  onChange={handleChange}
                                  placeholder="16:9 image"
                                  value={form.image}
                                />
                              </div>
                              <div className="w-full remove-border">
                                <label
                                  className="block mb-2 text-sm font-bold text-gray-500"
                                  htmlFor="msg"
                                >
                                  Tags
                                </label>
                                <Select
                                  options={categories.map((tag) => ({
                                    value: tag,
                                    label: tag,
                                  }))}
                                  onChange={(e) =>
                                    handleChange({
                                      target: {
                                        value: e,
                                        id: "tags",
                                      },
                                    })
                                  }
                                  value={form.tags}
                                  isMulti
                                  getOptionLabel={(option) => option.label}
                                  getOptionValue={(option) => option.value}
                                />
                              </div>
                            </>
                          )}
                          {currentStep === 1 && (
                            <>
                              <div>
                                <label
                                  className="block mb-2 text-sm font-bold text-gray-500"
                                  htmlFor="msg"
                                >
                                  Members (max 3) *
                                </label>
                                <Select
                                  options={query?.data?.map((user) => ({
                                    value: user.email,
                                    label: user.name,
                                  }))}
                                  onChange={(e) =>
                                    handleChange({
                                      target: {
                                        value: e,
                                        id: "users",
                                      },
                                    })
                                  }
                                  value={form.users}
                                  isMulti
                                />
                              </div>
                            </>
                          )}

                          {currentStep === 2 && (
                            <>
                              <div>
                                <label
                                  className="block mb-2 text-sm font-bold text-gray-500"
                                  htmlFor="msg"
                                >
                                  Links (demo/screenshots)
                                </label>
                                <div className="flex flex-col gap-2">
                                  <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="links[0]"
                                    type="text"
                                    autoComplete="off"
                                    onChange={(e) => handleChangeLinks(e, 0)}
                                    placeholder="e.g. Link to website"
                                    value={form.links[0]}
                                  />
                                  <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="links[1]"
                                    type="text"
                                    autoComplete="off"
                                    onChange={(e) => handleChangeLinks(e, 1)}
                                    placeholder="e.g. Link to Youtube video demo"
                                    value={form.links[1]}
                                  />
                                  <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="links[2]"
                                    type="text"
                                    autoComplete="off"
                                    onChange={(e) => handleChangeLinks(e, 2)}
                                    placeholder="e.g. Link to screenshot proof of real users"
                                    value={form.links[2]}
                                  />
                                  <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="links[3]"
                                    type="text"
                                    autoComplete="off"
                                    onChange={(e) => handleChangeLinks(e, 3)}
                                    placeholder="e.g. Link to Hackernews post"
                                    value={form.links[3]}
                                  />
                                </div>
                              </div>
                            </>
                          )}
                          {currentStep === 3 && (
                            <>
                              <div>
                                <label
                                  className="block mb-2 text-sm font-bold text-gray-500"
                                  htmlFor="msg"
                                >
                                  How to use
                                </label>
                                <textarea
                                  className="w-full px-3 py-2 text-sm leading-tight text-gray-500 border rounded shadow appearance-none resize-none focus:outline-none focus:shadow-outline"
                                  id="instructions"
                                  autoComplete="off"
                                  onChange={handleChange}
                                  required
                                  rows={4}
                                  maxLength={1000}
                                  placeholder="Use this space to explain anything we need to completely use your project. e.g. API Key, Install Chrome extension, Be underwater, etc."
                                  value={form.instructions}
                                ></textarea>
                              </div>
                            </>
                          )}
                          <div>
                            <div className="flex flex-row justify-between">
                              <label
                                htmlFor="progress"
                                className="block mb-2 text-sm font-bold text-gray-500"
                              >
                                Progress
                              </label>
                              <h1 className="text-sm font-bold text-gray-700">
                                {form.progress}%
                              </h1>
                            </div>
                            <input
                              type="range"
                              className="transparent h-[4px] accent-orange-500 w-full cursor-pointer appearance-none border-transparent bg-neutral-200"
                              id="progress"
                              step={5}
                              onChange={handleChange}
                              value={form.progress}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col-reverse gap-2 p-4 md:flex-row-reverse">
                    {currentStep < 3 && (
                      <button
                        type="button"
                        onClick={confirm}
                        disabled={saving}
                        className="justify-center w-full px-4 py-2 text-base font-medium text-white bg-orange-500 border rounded-[62px] shadow-sm hover:brightness-125 focus:outline-none sm:w-auto sm:text-sm"
                      >
                        {form.id ? "Update" : "Create"}
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={saving}
                      className="justify-center w-full px-4 py-2 text-base font-medium text-white bg-orange-500 border rounded-[62px] shadow-sm hover:brightness-125 focus:outline-none sm:w-auto sm:text-sm"
                    >
                      {saving ? (
                        <div className="flex items-center gap-4">
                          <img src="/loading.gif" className="h-[20px]" />
                          Saving...
                        </div>
                      ) : (
                        <>
                          {currentStep < 3
                            ? "Next"
                            : form.id
                            ? "Update"
                            : "Create"}
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center w-full py-2 px-4 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-[62px] shadow-sm hover:bg-gray-50 focus:outline-none sm:w-auto sm:text-sm"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
