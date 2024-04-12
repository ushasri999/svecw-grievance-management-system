import React from 'react';

const CheckBox = () => {
  return (
    <div className="bg-gray-100">
      <section className="filter-section right-pane">
        <div className="sticky-outer-wrapper">
          <div className="sticky-inner-wrapper relative top-0">
            <div className="filter-wrap">
              <section className="challenge-list-filter">
                <div className="filter-group">
                  <div className="group-label font-bold">Status</div>
                  <div className="filters">
                    <div className="ui-checklist" role="group">
                      <div className="ui-checklist-list space-y-2">
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                                <input type="checkbox" className="checkbox-input mr-2" value="unsolved" />
                                <span className="label">Completed</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                                <input type="checkbox" className="checkbox-input mr-2" value="unsolved" />
                                <span className="label">Incompleted</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="filter-group">
                  <div className="group-label font-bold">Room</div>
                  <div className="filters">
                    <div className="ui-checklist" role="group">
                      <div className="ui-checklist-list space-y-2">
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                                <input type="checkbox" className="checkbox-input mr-2" value="unsolved" />
                                <span className="label">Bhargavi</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                                <input type="checkbox" className="checkbox-input mr-2" value="unsolved" />
                                <span className="label">Bhuvana</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                                <input type="checkbox" className="checkbox-input mr-2" value="unsolved" />
                                <span className="label">Nirmala</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                                <input type="checkbox" className="checkbox-input mr-2" value="unsolved" />
                                <span className="label">Neelima</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                                <input type="checkbox" className="checkbox-input mr-2" value="unsolved" />
                                <span className="label">Mrudula</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                                <input type="checkbox" className="checkbox-input mr-2" value="unsolved" />
                                <span className="label">Manasa</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                                <input type="checkbox" className="checkbox-input mr-2" value="unsolved" />
                                <span className="label">Revathi</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                                <input type="checkbox" className="checkbox-input mr-2" value="unsolved" />
                                <span className="label">Rohini</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ui-checklist-list-item">
                          <div className="ui-checklist-item-wrap">
                            <div className="ui-checkbox theme-m">
                              <label className="label-wrap flex items-center">
                                <input type="checkbox" className="checkbox-input mr-2" value="unsolved" />
                                <span className="label">Pallavi</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckBox;
