class launchMiddleware {
  verifyData(req, res, next) {
    const launch = req.body;

    if (
      !launch.mission ||
      !launch.rocket ||
      !launch.target ||
      !launch.launchDate
    ) {
      return res
        .status(400)
        .json({ error: "Required data missing for the launch!" });
    }
    //Convert to JS Date Object
    const verifyDate = new Date(launch.launchDate);
    if (isNaN(verifyDate)) {
      return res.status(400).json({ error: "Invalid Date Format!" });
    }

    return next();
  }
}

const Middleware = new launchMiddleware();

export default Middleware;
